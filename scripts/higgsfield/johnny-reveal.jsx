import { readFile } from 'node:fs/promises';
export default async ({ project }) => {
  const bounds=JSON.parse(await readFile('/home/user/reveal/bounds.json','utf8'));
  for (const mobile of [false,true]) {
    const W=mobile?720:1280,H=mobile?728:776;
    const name=mobile?'mobile':'desktop';
    const p=await project({dir:'/home/user/reveal/'+name+'-edit',size:W+'x'+H,fps:24,background:'#0f1322'});
    const film=await p.add('/home/user/reveal/source.mp4');
    const still=await p.add('/home/user/reveal/last.png');
    const screen=await p.add('/home/user/reveal/'+(mobile?'phone':'desktop')+'.png');
    const phone=await p.add('/home/user/reveal/phone.png');
    const x=mobile?215:60,y=mobile?40:42,w=mobile?290:1040,h=mobile?290*844/390:1040*960/1440;
    const scale=w/(mobile?390:1440);
    const box=bounds[mobile?'phone':'desktop'];
    const target={x:x+box.x*scale,y:y+box.y*scale,width:box.width*scale,height:box.height*scale};
    const tween=(property,from,to)=>({property,from,to,at:0,duration:2,easing:[.22,1,.36,1]});
    p.cut(film,{at:0,from:0,dur:7,fit:'cover'});
    p.compose(<frame layout="none" width={W} height={H} background="#0f1322">
      <media file={screen} x={x} y={y} width={w} height={h} fit="fill" radius={8} shadow={{x:0,y:20,blur:38,color:'#00000088'}} />
      {!mobile && <media file={phone} x={1050} y={290} width={180} height={180*844/390} fit="fill" radius={16} shadow={{x:0,y:15,blur:25,color:'#00000088'}} animate={[{property:'opacity',from:0,to:1,at:1.9,duration:.6},{property:'offsetY',from:30,to:0,at:1.9,duration:.8,easing:'house'}]} />}
      <frame layout="column" width={W} height={H} origin="top-left" clip
        animate={[tween('width',W,target.width),tween('height',H,target.height),tween('offsetX',0,target.x),tween('offsetY',0,target.y),{property:'opacity',from:1,to:0,at:2.1,duration:.55}]}>
        <media file={still} width="fill" height="fill" fit="cover" />
      </frame>
    </frame>,{at:7,dur:3.5,name:'Website reveal'});
    for(const time of [1,5,7.5,8.5,10]) await p.frame(time,'frame-'+time+'.png');
    await p.render('reveal.mp4',{bitrate:6000000,shards:2,concurrency:2});
  }
};
