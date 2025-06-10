import React from 'react'
import ReactImg from '../../assets/icons/tech/react.png';
import ReactNative from '../../assets/icons/tech/react-native.svg';
import TypeScript from '../../assets/icons/tech/typescript.svg';
import Express from '../../assets/icons/tech/express-logo.png';
import Django from '../../assets/icons/tech/django.svg';
import Firebase from '../../assets/icons/tech/firebase-colored.svg';
import MySQL from '../../assets/icons/tech/mysql.svg';
import GitHub from '../../assets/icons/tools/github.png';
import GitLab from '../../assets/icons/tools/gitlab.svg';
import Tailwind from '../../assets/icons/tech/tailwind.png';
import Mongo from '../../assets/icons/tech/mongo.png';
import Java from '../../assets/icons/tech/java.png';
import Jira from '../../assets/icons/tools/jira.png';
import Postman from '../../assets/icons/tools/postman.svg';
import OOPIcon from '../../assets/icons/general/oop.svg';
import SOLIDIcon from '../../assets/icons/general/solid.svg';
import DesignPatternsIcon from '../../assets/icons/general/design-patterns.svg';
import SystemDesignIcon from '../../assets/icons/general/system-design.svg';
import CICDIcon from '../../assets/icons/general/cicd.svg';
import ScrumAgileIcon from '../../assets/icons/general/scrum-agile.svg';
import VerificationValidationIcon from '../../assets/icons/general/vv-icon.svg';
import PromptEngineeringIcon from '../../assets/icons/general/prompt-engineering.svg';
import AIIntegrationIcon from '../../assets/icons/general/ai-integration.svg';
import LLMAPIsIcon from '../../assets/icons/general/llm-apis.svg';
import TestAutomationIcon from '../../assets/icons/tools/test-automation.svg';
import RAGIcon from '../../assets/icons/general/rag-final.svg';
import DockerIcon from '../../assets/icons/tools/docker-colored.svg';
import ExpoIcon from '../../assets/icons/tools/expo-colored.svg';

const Skills = () => {
    return (
        <div name='skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-16'>
            <div className='max-w-[1200px] mx-auto px-4'>

                {/* Header Section */}
                <div className='text-center mb-16'>
                    <h2 className='text-5xl md:text-6xl font-bold text-[#ccd6f6] mb-4'>
                        Skills & Technologies
                    </h2>
                    <div className='w-24 h-1 bg-[#a32638] mx-auto mb-6'></div>
                    <p className='text-[#8892b0] text-lg max-w-2xl mx-auto'>
                        Here's what I use to build apps and solve problems — from React and backend APIs
                        to AI integrations and testing frameworks.
                    </p>
                </div>

                {/* Skills Categories */}
                <div className='space-y-12'>

                    {/* Development & Frameworks */}
                    <div className='bg-[#112240] p-8 rounded-lg border-l-4 border-[#a32638]'>
                        <div className='flex items-center mb-6'>
                            <div className='text-[#a32638] text-3xl mr-4'>⚡</div>
                            <h3 className='text-2xl font-bold text-[#ccd6f6]'>Development & Frameworks</h3>
                        </div>

                        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={ReactImg} alt="React icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>React</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={TypeScript} alt="TypeScript icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>TypeScript</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={ReactNative} alt="React Native icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>React Native</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={Express} alt="Express.js icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>Express.js</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={Java} alt="Java icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>Java</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={Tailwind} alt="Tailwind CSS icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>Tailwind CSS</p>
                            </div>
                        </div>
                    </div>

                    {/* Backend & Databases */}
                    <div className='bg-[#112240] p-8 rounded-lg border-l-4 border-[#a32638]'>
                        <div className='flex items-center mb-6'>
                            <div className='text-[#a32638] text-3xl mr-4'>🗄️</div>
                            <h3 className='text-2xl font-bold text-[#ccd6f6]'>Backend & Databases</h3>
                        </div>

                        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={Django} alt="Django icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>Django</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={Firebase} alt="Firebase icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>Firebase</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={MySQL} alt="MySQL icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>MySQL</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={Mongo} alt="MongoDB icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>MongoDB</p>
                            </div>
                        </div>
                    </div>

                    {/* AI & Modern Skills */}
                    <div className='bg-[#112240] p-8 rounded-lg border-l-4 border-[#a32638]'>
                        <div className='flex items-center mb-6'>
                            <div className='text-[#a32638] text-3xl mr-4'>🤖</div>
                            <h3 className='text-2xl font-bold text-[#ccd6f6]'>AI & Modern Skills</h3>
                        </div>

                        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={PromptEngineeringIcon} alt="Prompt Engineering icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>Prompt Engineering</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={RAGIcon} alt="Retrieval Augmented Generation icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>Retrieval Augmented Generation (RAG)</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={AIIntegrationIcon} alt="AI Integration icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>AI Integration</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={LLMAPIsIcon} alt="LLM APIs icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>LLM APIs</p>
                            </div>
                        </div>
                    </div>

                    {/* Tools & Workflow */}
                    <div className='bg-[#112240] p-8 rounded-lg border-l-4 border-[#a32638]'>
                        <div className='flex items-center mb-6'>
                            <div className='text-[#a32638] text-3xl mr-4'>🔧</div>
                            <h3 className='text-2xl font-bold text-[#ccd6f6]'>Tools & Workflow</h3>
                        </div>

                        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <div className='flex items-center justify-center w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300'>
                                    <img className='w-12 h-12' src={GitHub} alt="GitHub icon" />
                                    <span className='text-[#8892b0] mx-2 text-xl font-bold'>/</span>
                                    <img className='w-12 h-12' src={GitLab} alt="GitLab icon" />
                                </div>
                                <p className='text-center font-semibold text-[#ccd6f6]'>Git & Version Control</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={ExpoIcon} alt="Expo icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>Expo</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={TestAutomationIcon} alt="Test Automation icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>Test Automation</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={Jira} alt="Jira icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>Jira</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={Postman} alt="Postman icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>Postman</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={DockerIcon} alt="Docker icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>Docker</p>
                            </div>
                        </div>
                    </div>

                    {/* Software Engineering */}
                    <div className='bg-[#112240] p-8 rounded-lg border-l-4 border-[#a32638]'>
                        <div className='flex items-center mb-6'>
                            <div className='text-[#a32638] text-3xl mr-4'>⚙️</div>
                            <h3 className='text-2xl font-bold text-[#ccd6f6]'>Software Engineering Practices</h3>
                        </div>

                        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={OOPIcon} alt="OOP icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>Object-Oriented Programming</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={SOLIDIcon} alt="SOLID Principles icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>SOLID Principles</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={DesignPatternsIcon} alt="Design Patterns icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>Design Patterns</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={SystemDesignIcon} alt="System Design icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>System Design</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={CICDIcon} alt="CI/CD icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>CI/CD</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={ScrumAgileIcon} alt="Scrum/Agile icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>Scrum/Agile</p>
                            </div>
                            <div className='bg-[#0a192f] p-4 rounded-lg hover:bg-[#1a2741] transition-colors duration-300 group'>
                                <img className='w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300' src={VerificationValidationIcon} alt="Verification & Validation icon" />
                                <p className='text-center font-semibold text-[#ccd6f6]'>Verification & Validation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills