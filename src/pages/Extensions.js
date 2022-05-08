import React from 'react';
import { 
    ExtensionsContainer, 
    H3, 
    ArtDisplay, 
    GamesDisplay, 
    ProgrammingDisplay,
    BoxOne,
    BoxTwo
} from '../styles/extensions.style';
import Painting from './art/Painting';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Extensions() {
    return (
        <ExtensionsContainer>
            <div className="exten-container">
                <H3>
                    <h3>Art</h3>
                </H3>
                <ArtDisplay>
                    <div className="art-display">
                        <ul><li>Rules For This Extension:
                                <ol><li>
                                        Anyone attempting to sell art (whether pro-bono or not)
                                        without speaking to a staff member and receiving approval
                                        for their artwork, will have their work immediately removed
                                        and the ability to sell art will also be removed from the 
                                        artist.
                                    </li>
                                    <li>
                                        All items that are posted within any of these categories
                                        are required to be reviewed by staff members to determine
                                        whether the piece of art is pornographic, or PG-13 (or better).
                                        Any artist wanting to sell pornographic images will need 
                                        to find another platform to sell on as this will cause the 
                                        artist to lose their ability to sell artwork anywhere within
                                        the Gawth3r Platform, and other supporting platforms, and 
                                        the artist is subject to being reported to Discord themselves
                                        for posting, and attempting to sell, pornographic images in a 
                                        PG-rated community.
                                    </li>
                                    <li>
                                        If you dislike a piece of art, then it is highly recommended that 
                                        you use the <i><u>report</u></i> or <i><u>dislike</u></i> buttons that are 
                                        available to you as any negative, or hurtful/bullying/etc,
                                        comments will be removed, and you will lose your ability to comment 
                                        on forums. <a href="">See Punishment Table</a>
                                    </li>
                                </ol>
                        </li></ul>
                        <ul><li>Click A Category For That Forum:
                                <ul> {/* PLACE ROUTES FOR LINKS BELOW IN APP.JS */}
                                        <li>
                                            <Link to="/painting">Painting</Link>
                                        </li>
                                        <li>
                                            <Link to="/sculpture">Sculpture</Link>
                                        </li>
                                        <li>
                                            <Link to="/architecture">Architecture</Link>
                                        </li>
                                        <li>
                                            <Link to="/literature">Literature</Link>
                                        </li>
                                        <li>
                                            <Link to="/music">Music</Link>
                                        </li>
                                        <li>
                                            <Link to="/cinema">Cinema</Link>
                                        </li>
                                        <li>
                                            <Link to="/theatre">Theatre</Link>
                                        </li>
                                </ul>
                                <Routes>
                                    <Route path="/painting" element={<Painting />} />
                                    {/* <Route path="/sculpture" element={<Sculpture />} />
                                    <Route path="/architecture" element={<Architecture />} />
                                    <Route path="/literature" element={<Literature />} />
                                    <Route path="/music" element={<Music />} />
                                    <Route path="/cinema" element={<Cinema />} />
                                    <Route path="/theatre" element={<Theatre />} /> */}
                                </Routes>
                        </li></ul>
                    </div>
                </ArtDisplay>
                <H3>
                    <h3>Games</h3>
                </H3>
                <GamesDisplay>
                    <div className="games-display">
                        <BoxOne>
                            <ul><li>Currently Supported Games:
                                    <ul>
                                        <Link to="/gtav">GTA-V</Link>
                                    </ul>
                            </li></ul>
                        </BoxOne>
                        <BoxTwo>
                            <ul><li>Currently Supported Platforms:
                                    <ul>
                                        <li>Steam</li>
                                        <li>FiveM</li>
                                        <li>MultiMC</li>
                                        <li>Curseforge</li>
                                        <li>OverWolf</li>
                                    </ul>
                            </li></ul>
                        </BoxTwo>
                    </div>
                </GamesDisplay>
                <H3>
                    <h3>Programming</h3>
                </H3>
                <ProgrammingDisplay>
                    <div className="programming-display">
                        <BoxOne>
                            <div className="prog-langs">
                                Currently Supported Languages
                                <ol>
                                    <li>Python
                                        <ul>
                                            <li>
                                                Python is a high-level, interpreted, 
                                                interactive and object-oriented scripting 
                                                language. Python is designed to be highly 
                                                readable. It uses English keywords frequently 
                                                where as other languages use punctuation, and 
                                                it has fewer syntactical constructions than 
                                                other languages.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>JavaScript
                                        <ul>
                                            <li>
                                                It is a prototype-based, multi-paradigm scripting 
                                                language that is dynamic, and supports object-oriented, 
                                                imperative, and functional programming styles. JavaScript 
                                                runs on the client side of the web, which can be used to 
                                                design / program how the web pages behave on the occurrence 
                                                of an event.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>Go
                                        <ul>
                                            <li>
                                                Go (also called Golang or Go language) is an open source 
                                                programming language used for general purpose. Go was developed 
                                                by Google engineers to create dependable and efficient software. 
                                                Most similarly modeled after C, Go is statically typed and explicit.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>HTML/CSS
                                        <ul>
                                            <li>
                                                The HyperText Markup Language or HTML is the standard markup 
                                                language for documents designed to be displayed in a web browser. 
                                                It can be assisted by technologies such as Cascading Style Sheets 
                                                and scripting languages such as JavaScript.
                                            </li>
                                            <li>
                                                Cascading Style Sheets is a style sheet language used for 
                                                describing the presentation of a document written in a markup 
                                                language such as HTML. CSS is a cornerstone technology of the 
                                                World Wide Web, alongside HTML and JavaScript.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>Rust
                                        <ul>
                                            <li>
                                                Rust is a statically-typed programming language designed for 
                                                performance and safety, especially safe concurrency and memory 
                                                management. Its syntax is similar to that of C++. It is an open-
                                                source project developed originally at Mozilla Research.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>C ~ C# ~ C++
                                        <ul>
                                            <li>
                                                C is a high-level and general-purpose programming language that is 
                                                ideal for developing firmware or portable applications. Originally 
                                                intended for writing system software, C was developed at Bell Labs 
                                                by Dennis Ritchie for the Unix Operating System in the early 1970s.
                                            </li>
                                            <li>
                                                C# (pronounced "C-sharp") is an object-oriented programming language 
                                                from Microsoft that aims to combine the computing power of C++ with 
                                                the programming ease of Visual Basic. C# is based on C++ and contains 
                                                features similar to those of Java. C# is designed to work with Microsoft's 
                                                .NET platform.
                                            </li>
                                            <li>
                                                C++ is an object-oriented programming language which gives a clear 
                                                structure to programs and allows code to be reused, lowering development 
                                                costs. C++ is portable and can be used to develop applications that can 
                                                be adapted to multiple platforms.
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </BoxOne>
                        <BoxTwo>
                            <div className="opensource-files">
                                Our open-source files:
                                <ul>
                                    <li><a href=""></a>empty</li>
                                    <li><a href=""></a>empty</li>
                                    <li><a href=""></a>empty</li>
                                    <li><a href=""></a>empty</li>
                                    <li><a href=""></a>empty</li>
                                    <li><a href=""></a>empty</li>
                                </ul>
                            </div>
                        </BoxTwo>
                    </div>
                </ProgrammingDisplay>
            </div>
        </ExtensionsContainer>
    );
}

export default Extensions;