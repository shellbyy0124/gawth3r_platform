import { TablesContainer, TableOne, TH, TD } from '../../../styles/discord.style';

function GrandTheft() {
    return (
        <div className="main-container">
            <h1>GTAV - Gawth3r City</h1>
            <div className="city-rules">
                <TablesContainer>
                    <TableOne>
                        <table>
                            <caption>
                                These Rules Are To Be Followed At All Times!
                            </caption>
                            <tr>
                                <TH>
                                    <th>#1 - Remain In Character!</th>
                                </TH>
                                <TD>
                                    <td>
                                        Players Must Remain In Character At All Times. If At Anytime You 
                                        Need To Break Character, Contact An Admin and use the /OCC chat 
                                        option.
                                    </td>
                                </TD>
                            </tr>
                            <tr>
                                <TH>
                                    <th>#2 - White List Members Only!</th>
                                </TH>
                                <TD>
                                    <td>Players Must Be White-Listed In Order To Join The Server.</td>
                                </TD>
                            </tr>
                            <tr>
                                <TH>
                                    <th>#3 - No VDM</th>
                                </TH>
                                <TD>
                                    <td>
                                        VDM (Vehicle Death Match) Is The Act Of Killing Players With Cars For No Reason).
                                        This is an automatic bannable offense. You cannot appeal this ban for at least
                                        3 (three) Months IRL (In-Real-Life) time.
                                    </td>
                                </TD>
                            </tr>
                            <tr>
                                <TH>
                                    <th>#4 - No RDM</th>
                                </TH>
                                <TD>
                                    <td>
                                        RDM (Random Death Match) Is The Act Of Killing Players At Random For No Reason.
                                        This is an automatic bannable offense. You cannot appeal this ban for at least
                                        3 (three) Months IRL (In-Real-Life) time.
                                    </td>
                                </TD>
                            </tr>
                            <tr>
                                <TH>
                                    <th>#5 - No Metagaming</th>
                                </TH>
                                <TD>
                                    <td>
                                        Metagaming is using real-life knowledge and tactics out of the RP world to influence
                                        your RP experience and, ultimately, the outcomes. It gives an unfair advantage and
                                        will result in an immediate automatic ban that cannot be appealed for at least
                                        6 (six) months IRL (In-Real-Life) time.
                                    </td>
                                </TD>
                            </tr>
                            <tr>
                                <TH>
                                    <th>#6 - No Powergaming</th>
                                </TH>
                                <TD>
                                    <td>
                                        Powergaming is using in-game mechanics, external information, or a roleplay concept that
                                        gives a player an added advantage to their own story or roleplay character. This is an 
                                        automatic bannable offense and cannot be appealed for at least 6 (six) months IRL 
                                        (In-Real-Life) time.
                                    </td>
                                </TD>
                            </tr>
                        </table>
                    </TableOne>
                </TablesContainer>
            </div>
            <div className="city-jobs">
                <div className="box-1">
                    <h3>Jobs Available At City Hall</h3>
                    <ul>
                        <li>Unemployed</li>
                        <li>Trucker</li>
                        <li>Taxi</li>
                        <li>Tow</li>
                        <li>Reporter</li>
                        <li>Garbage</li>
                        <li>Bus</li>
                    </ul>
                </div>
                <div className="box-2">
                    <h3>
                        Jobs Available Via <a href="">Application</a>
                    </h3>
                    <ul>
                        <li>Chief Of Police</li>
                        <li>Chief Of EMS</li>
                        <li>Managing Agent - Real Estate</li>
                        <li>Manager - Car Dealer</li>
                        <li>Chief Mechanic</li>
                        <li>Supreme Court Judge</li>
                        <li>Attorney General</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default GrandTheft;