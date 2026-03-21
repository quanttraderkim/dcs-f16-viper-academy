# Part 13 - Datalink & IFF

- Pages: `600` to `648`
- Section ID: `part-13-datalink-iff`

## Page 600

600
PART 13 – DATALINK & IFF
F-16C
VIPER

## Page 601

601
PART 13 – DATALINK & IFF
F-16C
VIPER
SECTION STRUCTURE
• 1 – Datalink & IFF Introduction
• 2 – Datalink
• 2.1 – TNDL (Tactical Network Datalink)
• 2.2 – Components Breakdown
• 2.3 – Datalink Track File Types
• 2.4 – HSD (Horizontal Situation Display) Symbology
• 2.5 – FCR (Fire Control Radar) Symbology
• 2.6 – DED (Data Entry Display) DLNK Pages
• 2.7 – MIDS Network
• 2.7.1 – Overview
• 2.7.2 – Add/Modify Members
• 2.8 – Wingman Radar Lock Lines
• 2.9 – Data Filters
• 2.9.1 – Filters – FCR Page
• 2.9.2 – Filters – HSD CNTL Page
• 2.10 – Primary Datalink Track (PDLT)
• 2.11 – Data Sharing via Datalink
• 2.11.1 – Markpoint/Steerpoint Sharing
• 2.11.2 – SPI (Sensor Point of Interest) Sharing
• 2.11.3 – HTS (HARM Targeting System) Pod Radar Emitter Sharing
• 3 – IFF (Identify-Friend-or-Foe)
• 3.1 - IFF Introduction
• 3.2 – IFF Modes & Principles
• 3.3 – IFF Components & Controls
• 3.4 – Setting IFF Codes
• 3.5 – IFF Tutorial (Mode 4)
• 3.5.1 – SCAN Interrogation Method
• 3.5.2 – LOS (Line of Sight) Interrogation Method
• 3.6 – NCTR (Non-Cooperative Target Recognition)
• 3.7 – In Conclusion

## Page 602

602
PART 13 – DATALINK & IFF
F-16C
VIPER
1 – DATALINK & IFF INTRODUCTION
One of the biggest challenges of integrated modern warfare is the identification of contacts. As various information donors like friendly fighters, ground radar stations, AWACS (Airborne Warning and
Control System, like an E-3 Sentry or an E-2 Hawkeye), and ships interrogate unknown contacts with IFF (Identify-Friend-or-Foe) systems, this information needs to be relayed to everyone within a given
Network. This is where Datalink comes in; with Link 16 Datalink, military aircraft as well as ships and ground forces may exchange their tactical picture in near-real time. Link 16 also supports the
exchange of text messages, imagery data and provides two channels of digital voice (2.4 kbit/s and/or 16 kbit/s in any combination).
Multifunctional Information Distribution System (MIDS) is the NATO name for the communication component of Link-16. MIDS is an advanced command, control, communications, computing and
intelligence (C4I) system incorporating high-capacity, jam-resistant, digital communication links for exchange of near real-time tactical information, including both data and voice, among air, ground, and
sea elements. MIDS is intended to support key theater functions such as surveillance, identification, air control, weapons engagement coordination and direction for all Services.
The aircraft relies on the MIDS radios that allow the transmission and reception of data over the Link 16 Tactical Data Information Link (TADIL) network.
HOSTILES
FRIENDLIES

## Page 603

603
PART 13 – DATALINK & IFF
F-16C
VIPER
2 – DATALINK
2.1 – TNDL (TACTICAL NETWORK DATALINK) CONCEPT
The current implementation of the Datalink system for the DCS F-16 by Eagle Dynamics is known as the “Tactical Network Datalink” (TNDL). Formerly
referred as “L16” in previous DCS builds, TNDL symbology has not really changed compared to its earlier version… but its capability and ability to
customize the network has changed significantly. You may see references to “L16”, “Link-16” or “TNDL” throughout the guide… just keep in mind...
They are functionally the same within the scope of DCS World.
Within the DCS World environment, TNDL allows F-16s and F/A-18s to exchange data on the same network. What does that mean, though? In practical
terms, you can have multiple flights on the same network finding radar contacts, which in turn send this information to other members on the net.
Old (Deprecated) Datalink Implementation Current Datalink Implementation

## Page 604

604
PART 13 – DATALINK & IFF
F-16C
VIPER
General Concepts: STN & Voice Callsigns
• A “flight” has up to four “members”. Each flight has a specific callsign, which is used for general communications.
• Each member on the datalink network’s Fighter Channel is identified with a unique “Source Track Number” (STN).
• The STN numbering convention must be an “octal” (only values of 0 to 7 are valid). As an example: “00201” is a valid
STN number.
• The Voice Callsign Label is a two-letter label that refers to a flight’s callsign. As an example: “VR” for “Viper” or “ST”
for “Sting”.
• The Voice Callsign Number refers to the flight number (first number) and the member’s position in the flight (second
number). As an example: “14” is for “Flight No. 1 / Member No. 4”.
• In the Mission Editor, the “Settings” tab allows you to set the Voice Callsign Label, Voice Callsign Number and STN for
each aircraft.
Aircraft Additional Properties Tab
2 – DATALINK
2.1 – TNDL (TACTICAL NETWORK DATALINK) CONCEPT

## Page 605

605
PART 13 – DATALINK & IFF
F-16C
VIPER
Mission Editor – Network Tab
• The Datalink Fighter Channel can have up to 8 members from different flights + 4 donors.
• Datalink members can be changed, but datalink donors cannot be viewed or edited once in the cockpit.
• Surveillance aircraft like E-3A AWACS does not need to be added in the TNDL Donors; they will appear in the datalink
network regardless and feed your flight with information.
• The TDOA assignment setting stands for “Time Difference of Arrival”; it boils down to the ability to use participating
datalinked team members to quickly pinpoint a threat radar emitter like a SAM site. TDOA is only available when
each Team member is loaded with a HTS pods (HARM Targeting System). There must also be a minimum of three
Team members in a TDOA team.
Mission Editor – Setting Tab
• The Setting Tab is mostly automatically filled. It contains datalink Fighter Channel, Mission Channel and Special
Channel settings for each aircraft.
• If the aircraft is to be the Team leader, the Flight Lead property is enabled.
• The Transmit Power setting determines the datalink broadcast range.
Datalinks TabTNDL Properties
Network Tab
Datalinks TabTNDL Properties
Setting Tab
2 – DATALINK
2.1 – TNDL (TACTICAL NETWORK DATALINK) CONCEPT

## Page 606

606
PART 13 – DATALINK & IFF
F-16C
VIPER
Mission Editor – Adding a Member to the Network
1. Select Datalinks Tab
2. Select TNDL menu
3. Select Network Tab
4. You can select either a single unit or an entire group of units to add to the network
5. Select ADD on the desired unit/group you want to add.
6. Units can be removed using the DEL (Delete) button.
1
2
3
4 45a
6
5b
2 – DATALINK
2.1 – TNDL (TACTICAL NETWORK DATALINK) CONCEPT

## Page 607

Viper Flight 1
607
PART 13 – DATALINK & IFF
F-16C
VIPER
Network Example
Viper 1-1 (F-16)
Flight 1 / Member 1
STN: 00201
Voice Callsign Label: VR
Voice Callsign Number: 11
Viper 1-2 (F-16)
Flight 1 / Member 2
STN: 00202
Voice Callsign Label: VR
Voice Callsign Number: 12
Viper 1-3 (F-16)
Flight 1 / Member 3
STN: 00203
Voice Callsign Label: VR
Voice Callsign Number: 13
Viper 1-4 (F-16)
Flight 1 / Member 4
STN: 00204
Voice Callsign Label: VR
Voice Callsign Number: 14
Jedi Flight 1
Jedi 1-1 (F-16)
Flight 1 / Member 1
STN: 00301
Voice Callsign Label: JD
Voice Callsign Number: 11
Jedi 1-2 (F-16)
Flight 1 / Member 2
STN: 00302
Voice Callsign Label: JD
Voice Callsign Number: 12
Jedi 1-3 (F-16)
Flight 1 / Member 3
STN: 00303
Voice Callsign Label: JD
Voice Callsign Number: 13
Jedi 1-4 (F-16)
Flight 1 / Member 4
STN: 00304
Voice Callsign Label: JD
Voice Callsign Number: 14
Sting Flight 1 (Donors)
Sting 1-1 (F/A-18)
Flight 1 / Member 1
STN: 00501
Voice Callsign Label: ST
Voice Callsign Number: 11
Sting 1-2 (F/A-18)
Flight 1 / Member 2
STN: 00502
Voice Callsign Label: ST
Voice Callsign Number: 12
Sting 1-3 (F/A-18)
Flight 1 / Member 3
STN: 00503
Voice Callsign Label: ST
Voice Callsign Number: 13
Sting 1-4 (F/A-18)
Flight 1 / Member 4
STN: 00504
Voice Callsign Label: ST
Voice Callsign Number: 14
Viper Flight 1
Members 1-4
Jedi Flight 1
Members 5-8
Sting Flight 1
Donors 1-4
2 – DATALINK
2.1 – TNDL (TACTICAL NETWORK DATALINK) CONCEPT

## Page 608

608
PART 13 – DATALINK & IFF
F-16C
VIPER
2 – DATALINK
2.2 – COMPONENTS BREAKDOWN
The Datalink system on the F-16 can be turned ON using the MIDS (Multifunctional
Information Distribution System) LVT (Low Volume Terminal) Datalink Selector
Switch.
Datalink parameters can be accessed from the DED (Data Entry Display) DLNK sub-
menu and modified through the ICP (Integrated Control Panel).
Datalink data is visible on both the FCR (Fire Control Radar) page and on the HSD
(Horizontal Situation Display) page.
MIDS (Multifunctional Information Distribution System)
LVT (Low Volume Terminal) Datalink Selector Switch
• ZERO: Zeroize (erase) all MIDS information
• OFF: MIDS is OFF
• ON: MIDS is ON
DED (Data Entry Display) LIST – DLNK Sub-Menu
FCR (Fire Control Radar) Page HSD (Horizontal Situation Display) Page
ICP (Integrated Control Panel)

## Page 609

609
PART 13 – DATALINK & IFF
F-16C
VIPER
2 – DATALINK
2.3 – DATALINK TRACK FILE TYPES
Datalink can receive and display three types of track files:

• Surveillance Tracks, provided by data sources like AWACS
and radar ground stations.
• Fighter Tracks, provided by donor aircraft, other fighters
providing track data, on the network. They are all correlated
against each other to avoid duplicate trackfiles. These are
visually identical to surveillance tracks.
• PPLI (Precise Participant Location and Identification) Tracks,
show the location and status of members of the pilot’s own
flight and up to four additional donor aircraft.
Take note that on the FCR (Fire Control Radar) page, the RWS
(Range While Search) contacts are uncorrelated because they
lack tracking precision, whereas TWS (Track While Scan)
contacts are correlated because of much more precise tracking
information.
This information comes from a friendly fighter
donor (F/F: Fighter-to-Fighter) on the same datalink
network, however you have not acquired this track
yourself. This is an offboard trackfile.
This information comes from a surveillance donor
(like an AWACS or a ship) on the same datalink
network. This is an offboard trackfile.
The Precise Participant Location and Identification
(PPLI) system broadcasts to other aircraft on
datalink positional information about the PPLI
donor itself. These symbols show the location and
status of members of the pilot’s own flight and up
to four additional donor aircraft.
Symbol
Vector Line
Altitude
(Thousands of Feet)
You have acquired this track and another
information donor has given you information
(offboard trackfile) about it as well. This means
this information is correlated/coherent between
an onboard (you) and an offboard information
source. This is termed Multi Source Integration
(MSI).

## Page 610

610
PART 13 – DATALINK & IFF
F-16C
VIPER
2 – DATALINK
2.4 – HSD (HORIZONTAL SITUATION DISPLAY) SYMBOLOGY
Hostile Track, altitude 30000 ft
Friendly Track,
altitude 31000 ft.
SAM (Surface-to-Air Missile) Site Threat Ring
• This ring is set by the DTC (Data Transfer Cartridge) via the
Mission Editor. This is an indicator of the SAM radar range and
this region should be avoided if possible.
• If SAM site is destroyed, the Threat Ring will remain displayed.
It does not update dynamically with the SAM site itself, it is
merely a visual marker set prior to the mission according to
currently available intelligence on deployment of enemy forces.
SAM (Surface-to-Air Missile) Site Symbol
(SA-10)
HSD (Horizontal Situation
Display) Page

## Page 611

611
PART 13 – DATALINK & IFF
F-16C
VIPER
2 – DATALINK
2.4 – HSD (HORIZONTAL SITUATION DISPLAY) SYMBOLOGY
View Position of HSD
• DEP: Depressed (Default)
Position
• CEN: Centered Position
View Coupled (CPL) or De-coupled (DCPL) from
FCR (Fire Control Radar) Range
Current zoom level on the HSD
• NORM (normal view)
• EXP1 (area around your aircraft is expanded
• EXP2 (area around your aircraft is expanded further)
Displays Datalink Message (MSG)
HSD CNTL (Control) Page
HSD Datalink XMT (Transmit) Option
• TNDL (Tactical Network Datalink, formerly
referred as “L16” in earlier DCS versions)
HSD FZ (Freeze) Function. HSD will freeze in its
current position, and will not turn with your
aircraft or reposition itself to keep you centered.
HSD Datalink Contact Filter
• FR ON: All Friendly Contacts
• FL ON: Flight Leaders Only
• FR OFF: Friendly Contacts OFF
Display Declutter (DCLT) Function. Removes
information from HSD to make it more readable.

## Page 612

612
PART 13 – DATALINK & IFF
F-16C
VIPER
2 – DATALINK
2.5 – FCR (FIRE CONTROL RADAR) SYMBOLOGY
Hostile Track Bugged by Wingman 2,
altitude 19000 ft.
Hostile Track Bugged by Wingman 3,
altitude 18000 ft.
Friendly Tracks,
altitude 18000 ft.
Hostile Track Bugged by Multiple Donors (M),
altitude 16000 ft.
Hostile Track Bugged by Flight Member Ford 1-1 (FD11),
altitude 13000 ft.
Bugged Target ID
Track Symbol
Vector Line
Altitude
(thousands of feet)
RWS contacts are uncorrelated because they
lack tracking precision.
TWS contacts are correlated because TWS
generates more precise tracking information.
RWS (Range While Search) /
TWS (Track While Scan) Mode
FCR (Fire Control Radar) Page

## Page 613

613
PART 13 – DATALINK & IFF
F-16C
VIPER
To consult the MIDS Network Data on the DLNK DED Pages:
1. Press the LIST button on the ICP (Integrated Control Panel)
2. Select Datalink (DLNK) page by pressing the ENTR (E) button.
3. On the DED (Data Entry Display) Datalink page 1 (P1), you can
consult Datalink Network Status and time references.
4. Press the DCS (Data Control Switch, also called “Dobber”)
RIGHT (SEQ) select the DED Datalink page 2 (P2).
5. On the DED Datalink page 2, you can consult Datalink MIDS
Radio Options. Most MIDS settings can be left as is.
6. If desired, you can modify your MIDS settings by selecting a
field with the “Dobber” switch UP or DOWN. “*” symbols will
indicate which data field is selected. Then, enter the field
value on the ICP keypad, then press “ENTR” button on the ICP
to modify the field.
7. Press the DCS (Data Control Switch, “Dobber”) RIGHT (SEQ)
select the DED Datalink page 3 (P3).
8. On the DED Datalink page 3, you can consult Datalink Flight
Management data .
MIDS Radio Options
Flight Management
Fighter Channel (FC) Selection
Mission Channel (MC) Selection
Surveillance Channel (SC) Selection
Callsign (VR 11 = Viper 1-1)
Flight Lead (FL) Identifier
Transmission Power (XMT)
Flight Member Source
Track Numbers (STN)
GPS Time Reference
Pilot Entered Time
Network Time Reference
Network Synchronization Status
Datalink Network Status
4 6
1
2
1
2
2 – DATALINK
2.6 – DED (DATA ENTRY DISPLAY) DLNK PAGES
Own Flight Position
(Shown: 1)

## Page 614

614
PART 13 – DATALINK & IFF
F-16C
VIPER
2 – DATALINK
2.6 – DED (DATA ENTRY DISPLAY) DLNK PAGES
DLNK PAGE STRUCTURE
DCS (Data Control Switch, also nicknamed “Dobber”)
LIST Button
Press “ENTR” to select DLNK DED Page
Dobber RIGHT
(SEQ)
Dobber RIGHT
(SEQ)
LIST Button
MIDS Radio Options Flight ManagementDatalink Network Status
LIST Menu
ENTR Button

## Page 615

615
PART 13 – DATALINK & IFF
F-16C
VIPER
Here is an overview of the three different
kinds of channels you can set.
• Fighter Channel (FC) is for members of
your own flight
• Mission Channel (MC) is for members
of other flights
• Surveillance Channel (SC) is for tactical
datalink with information donors (i.e.
AWACS)
YOU - Flight Member Track Number:
00201 (#1, Flight Lead, Enfield 1-1)
Flight Member Track Number:
00202 (#2, Enfield 1-2)
Flight Member Track Number:
00301 (#3, Flight Lead, Colt 1-1)
Flight Member Track Number:
00302 (#4, Colt 1-2)
E-3A AWACS (Surveillance)
MC (Mission Channel) 1
FC (Fighter Channel) 1 (Enfield)
SC (Surveillance Channel) 1
MIDS Radio Options Flight Management
2 – DATALINK
2.7.1 – MIDS NETWORK – OVERVIEW
T: TDOA (Time Difference
On Arrival) Assignment

## Page 616

616
PART 13 – DATALINK & IFF
F-16C
VIPER
At the moment, you should assume that your STN (Source Track Number),
Callsign and Flight Lead (FL) Identifiers are all set correctly since they are
generated by the Mission Editor.
The Own Flight Position ID number indicates your position in your current
flight (i.e. Enfield Flight in our case).
Blue Symbols indicate member of your current flight. Green symbols are
friendly donors of your Datalink network, but from different flights.
The number inside the circle symbol is the Own Flight Position Number
within your own flight. The number below the circle symbol is the altitude of
the Datalink contact in thousands of feet (06 = 6000 ft).
Callsign (ED 11 = Enfield 1-1)
Flight Lead (FL) Identifier
Flight Member Number
Ownship’s Position in the
Flight (Shown: 1)
MIDS Radio Options
Flight Management
YOU - Flight Member Track Number:
00201 (#1, Flight Lead, Enfield 1-1)
Flight Member Track Number:
00202 (#2, Enfield 1-2)
Flight Member Track Number:
00301 (#3, Flight Lead, Colt 1-1)
Flight Member Track Number:
00302 (#4, Colt 1-2)
YOU - Flight Member Track Number:
00201 (#1, Flight Lead, Enfield 1-1)
Flight Member Track Number:
00202 (#2, Enfield 1-2)
Flight Member Track Number:
00301 (#3, Flight Lead, Colt 1-1)
Flight Member Track Number:
00302 (#4, Colt 1-2)
Transmission Power (XMT)
Flight Member Source Track Numbers (STN)
2 – DATALINK
2.7.1 – MIDS NETWORK – OVERVIEW

## Page 617

617
PART 13 – DATALINK & IFF
F-16C
VIPER
This is an example of how members of two different flights on a same Datalink
network would see each other.
Enfield
Flight
Colt
Flight
# 1 – 00201
Enfield 1-1
(Flight Lead)
# 1 – 00301
Colt 1-1 (Flight
Lead)
# 2 – 00202
Enfield 1-2
# 2 – 00302
Colt 1-2
# 3 – 00203
Enfield 1-3
# 3 – 00303
Colt 1-3
# 4 – 00204
Enfield 1-4
# 4 – 00304
Colt 1-4
Enfield Flight
Colt 1-1
(Lead, #1, 00301) Colt 1-2
(#2, 00302)
Colt 1-3
(#3, 00303)
Colt 1-4
(#4, 00304)
Enfield 1-1
(Lead, #1, 00201)
Enfield 1-2
(#2, 00202)
Enfield 1-3
(#3, 00203)
Enfield 1-4
(#4, 00204)
Colt Flight
Colt 1-4
Enfield 1-1
2 – DATALINK
2.7.1 – MIDS NETWORK – OVERVIEW

## Page 618

618
PART 13 – DATALINK & IFF
F-16C
VIPER
If desired, you can add or modify team members on your flight’s Datalink Network.
Team Member Numbers can be changed and assigned a unique STN (Source Track
Number), Remember: STNs themselves are associated to one aircraft only. STNs cannot
be changed and are hard-coded in the Mission Editor.
As an example, if you want to replace Team Member #3 with Sting 1-4 (STN 00504) :
1. Select MIDS FLIGHT MANAGEMENT page
a) Press LIST Button
b) Press ENTR Button
c) Select Dobber RIGHT (SEQ) twice
d) Your Current Own Team Member Number within your flight can be seen as
#1 (Your STN is 00201)
e) The Current Team Member #3 slot is taken by Viper 1-3 (STN 00203). We
want to replace #3 slot with Sting 1-4 (STN 00504).
2. Select the “STN” field for Team Member #3 with the “Dobber” switch UP or DOWN.
“*” symbols will indicate which data field is selected.
3. Enter the STN value of Sting 1-4 on the ICP keypad (00504)
4. Press “ENTR” button on the ICP to modify the field.
5. Team Member #3 slot is now assigned to Sting 1-4 (STN 00504).
1c 2
1a
1b
You
2 – DATALINK
2.7.2 – MIDS NETWORK – ADD/MODIFY MEMBERS
1c
1b
2
3
3
4
4
5
1c
1d
1d
1e
1e
1e
You
Viper 1-3
Flight Member #3
(STN 00203)
Sting 1-4
(STN 00504)
1e
Sting 1-4
Flight Member #3
(STN 00504)
Viper 1-3
(STN 00203)

## Page 619

619
PART 13 – DATALINK & IFF
F-16C
VIPER
2 – DATALINK
2.8 – WINGMAN RADAR LOCK LINES
A dashed cyan wingman lock line is drawn from wingmen to their currently bugged (or radar locked) targets.
a. Wingman lock lines are only displayed for flight members (blue) and not for all donors on the network.
b. There is no lock line visible for your own bugged targets on your own HSD page
c. Your wingmen will see your lock line for your own bugged targets if the XMT option is set to TNDL (Tactical Network Datalink,
formerly referred as “L16” in earlier DCS versions) on the HSD page.
Enfield 1-1 (You)
(Lead, #1)
Enfield 1-2
(Wingman, #2)
Enfield 1-3
(Wingman, #3)
Wingman Radar Lock
Wingman Radar Lock
c
Wingman Lock Line
Wingman Lock Line
Your own bugged target

## Page 620

620
PART 13 – DATALINK & IFF
F-16C
VIPER
2 – DATALINK
2.9.1 – DATA FILTERS: FCR PAGE
Track symbols displayed on the FCR page may be filtered using the UHF/VHF Transmit switch. This affects tracks displayed on the
radar display only and does not affect those displayed on the HSD.
Positioning the Transmit switch inboard short (less than 0.5 sec) rotates between three filter options.
Positioning the Transmit Switch outboard short (less than 0.5 sec) selects NONE and removes all datalink tracks. Selecting
outboard short again returns to the previously selected filter option.
FCR (Fire Control Radar) Page
Datalink TracksFilter Options
• ALL: All Datalink symbols are displayed
• FTR+: Datalink Surveillance tracks are removed
• TGTS: Datalink Surveillance and PPLI tracks are
removed
• NONE: No Datalink symbols are displayed
Datalink Contacts
filtered out
Communications UHF/VHF Transmit Switch (4-Way)
• Transmit Switch – IFF IN (INBOARD): Cycles filter options
• Transmit Switch – IFF OUT (OUTBOARD): Removes datalink tracks

## Page 621

621
PART 13 – DATALINK & IFF
F-16C
VIPER
2 – DATALINK
2.9.2 – DATA FILTERS: HSD CNTL PAGE
If you press on the CNTL (Control) OSB (Option Select Button) of the HSD page, you can configure what kind of data is displayed.
HSD CNTL (Control) Sub-Page
NAV1: Toggles the display of
your navigational route 1.
NAV2: Toggles the display of
your navigational route 2.
NAV3: Toggles the display of
your navigational route 3.
RINGS: Toggles the display of
range rings around your
aircraft.
FCR: toggles display of the radar scan area and the
"ghost" cursor showing the position of your FCR
(Fire Control Radar) cursor
PRE (Pre-Programmed): Toggles the display of
enemy targets that were programmed into your
aircraft's computer before takeoff
AIFF: Toggles the display of Advanced IFF (Identify-
Friend-or-Foe) responses from other aircraft.
LINE1: Toggles the display of map information line 1
on the HSD (i.e. Forward Line of Troops).
LINE2: Toggles the display of map information line 2
on the HSD.
LINE3: Toggles the display of map information line 3
on the HSD.
LINE4: Toggles the display of map information line 4
on the HSD.
Access to CNTL Page 2

## Page 622

622
PART 13 – DATALINK & IFF
F-16C
VIPER
If you press on the CNTL (Control) OSB (Option Select Button) of the HSD page, you can configure what kind of data is displayed.
HSD CNTL (Control) Sub-Page
A TGTS: Toggles the display of air threats/targets
uploaded to your computer from data link
G TGTS: Toggles the display of ground threats/targets
uploaded to your computer from data link
SAM: Toggles the display of SAM (Surface-to-Air
Missile) symbols and threat rings
SHIP: Toggles the display of Ship symbols uploaded to
your computer from data link
A SMDL (Previously IDM) :
Not Functional
TNDL (Previously L16) ENG:
Not Functional
REF PT: Not Functional
PDLT RNG (Primary Datalink Track Range): HSD range scale automatically
increases to maintain the PDLT within the HSD Field of View
A SURV: Toggles the display of surveillance air
threats/targets uploaded to your computer from data
link
G FRND: Toggles the display of friendly ground units
uploaded to your computer from data link
LAR: Toggles Launch Acceptable Range
(LAR) Symbology from HSD
MP: Not Functional
Access to CNTL Page 1
2 – DATALINK
2.9.2 – DATA FILTERS: HSD CNTL PAGE

## Page 623

623
PART 13 – DATALINK & IFF
F-16C
VIPER
PDLT (Primary Datalink Track) allows you to designate a datalink-only
or a correlated track on the HSD and have an octagon symbol around
it on the HSD, FCR, HUD, and HMCS. This is a useful tool to maintain
situational awareness on your wingman, element lead, or a target.
This means that you can assign a PDLT to a wingman or an unknown
contact spotted by an AWACS.
2 – DATALINK
2.10 – PRIMARY DATALINK TRACK (PDLT)
Heads-Up Display
(HUD)
PDLT Symbol (Octagon)
HMCS (Helmet-Mounted
Cueing System)
FCR (Fire Control Radar)HSD (Horizontal Situation Display)
Target Altitude (in thousands of feet)
PDLT Symbol (Octagon)
PDLT Symbol (Octagon)
PDLT Symbol (Octagon)
PDLT Symbol (Octagon)

## Page 624

3b
624
PART 13 – DATALINK & IFF
F-16C
VIPER
To assign the PDLT to a datalinked contact:
1. Make the HSD (Horizontal Situation Display) the SOI (Sensor of Interest) with the DMS
(Display Management Switch) DOWN.
2. Slew the HSD Cursor over a datalink-only or a non-designated correlated contact using
the Radar Cursor/Enable switch.
3. Press TMS (Target Management Switch) UP.
4. An already designated (bugged) contact cannot be assigned as the PDLT, assigning it
would make it a designated contact.
5. If a PDLT contact becomes the designated contract, the PDLT octagon is removed.
6. If there is a PDLT assigned contact, and a different contact is assigned to be the PDLT,
the PDLT assignment is moved to the newly assigned contact.
7. If there is an assigned PDLT contract, pressing TMS Right will cycle the PDLT through the
undesignated datalink and correlated A-A (Air-to-Air) contacts. The step order is from
the bottom of the HSD to the top. If of equal distance on the HSD, then left to right.
DMS (Display
Management Switch)
TMS (Target
Management Switch)
Radar Cursor/Enable Switch
Depress, Multidirectional
• Used for slewing of the fire control radar cursor or
targeting pod/weapon video.
1a
HSD Cursor
1b
SOI Box
2b
2a
2c
3a
7
With PDLT
Assignment
2 – DATALINK
2.10 – PRIMARY DATALINK TRACK (PDLT)

## Page 625

With PDLT
Assignment
Without PDLT
Assignment
625
PART 13 – DATALINK & IFF
F-16C
VIPER
To remove a PDLT assignment:
1. Make the HSD (Horizontal Situation Display) the SOI (Sensor of Interest) with the
DMS (Display Management Switch) DOWN.
2. Slew the HSD Cursor over the PDLT octagon using the Radar Cursor/Enable switch.
3. Press TMS (Target Management Switch) DOWN.
4. The PDLT assignment is now removed.
5. If the PDLT is also over a threat ring, the first TMS Aft removes the threat ring, and
the second TMS Aft removes the PDLT assignment.
6. If the datalink track is lost on the PDLT contact assignment, the PDLT symbol is
removed.
DMS (Display
Management Switch)
TMS (Target
Management Switch)
Radar Cursor/Enable Switch
Depress, Multidirectional
• Used for slewing of the fire control radar cursor or
targeting pod/weapon video.
1a
2b
3a
7
3b
HSD Cursor
1b
SOI Box 2a
2c
2 – DATALINK
2.10 – PRIMARY DATALINK TRACK (PDLT)

## Page 626

626
PART 13 – DATALINK & IFF
F-16C
VIPER
SENDING DATA
To transmit/broadcast a selected markpoint or steerpoint:
1. We have already created a Markpoint with the targeting pod (stored in
Steerpoint 26).
2. On HSD (Horizontal Situation Display), press OSB next to HSD Datalink XMT
(Transmit) Option to TNDL (Tactical Network Datalink, formerly referred as
“L16” in earlier DCS versions)
3. Make the HSD (Horizontal Situation Display) the SOI (Sensor of Interest) with the
DMS (Display Management Switch) DOWN.
4. Select the steerpoint or markpoint you want to transmit with the DED
Increment/Decrement Switch.
• Reminder: Steerpoints 26 to 30 are reserved for ownship markpoints.
5. Press the Communications UHF/VHF Transmit Switch INBOARD (IFF IN) for more
than 0.5 sec. This will transmit the selected steerpoint/markpoint to your flight
members in the same datalink network.
2 – DATALINK
2.11 – DATA SHARING VIA DATALINK
2.11.1 – MARKPOINT/STEERPOINT SHARING
Communications UHF/VHF Transmit Switch (4-Way)
• Transmit Switch – IFF IN (INBOARD)
• Transmit Switch – IFF OUT (OUTBOARD)
HSD Datalink XMT (Transmit) Option
• TNDL (previously referred as “L16”)
DED Increment/Decrement Switch
DMS (Display
Management Switch)
1
2
3
HSD SOI Box
4
4
5a
5b
Transmitting Data
1
1
Markpoint Symbol

## Page 627

627
PART 13 – DATALINK & IFF
F-16C
VIPER
RECEIVING DATA
When your wingman receives a markpoint or steerpoint shared through the datalink system:
1. A “Data” audio cue is heard
2. On the HUD (Heads-Up Display), the MKPTXXXX DATA indication shows the reference number of the SPI sent to
you, which is “500” in our case.
3. On HSD, a large white cross indicates the sent/transmitted markpoint or steerpoint.
4. If you want to see the markpoint/steerpoint coordinates, you can go in the STPT DED page and look at STPT No.
500 (reference number).
5. To remove the MKPTXXXX DATA indication on the HUD, press the Warning Reset Switch DOWN on the ICP.
2 – DATALINK
2.11 – DATA SHARING VIA DATALINK
2.11.1 – MARKPOINT/STEERPOINT SHARING
2
5
3
Received Markpoint/Steerpoint
4
Wingman
You

## Page 628

628
PART 13 – DATALINK & IFF
F-16C
VIPER
SENDING DATA
To transmit/broadcast a target designated as the SPI (Sensor Point of Interest):
1. Press A-G (Air-to-Ground) Master Mode Button
2. On HSD (Horizontal Situation Display), press OSB next to HSD Datalink XMT (Transmit) Option to
TNDL (Tactical Network Datalink, formerly referred as “L16” in earlier DCS versions).
3. Make the targeting pod (or a sensor of your choice) the SOI (Sensor of Interest) with the DMS
(Display Management Switch) DOWN.
4. Designate target with the targeting pod (or another sensor of your choice) using a CCRP release
mode, the Radar Cursor/Enable switch and TMS (Target Management Switch) UP.
5. Press the Communications UHF/VHF Transmit Switch INBOARD (IFF IN) for more than 0.5 sec.
This will transmit the selected SPI to your flight members in the same Link-16 datalink network.
2 – DATALINK
2.11 – DATA SHARING VIA DATALINK
2.11.2 – SPI (SENSOR POINT OF INTEREST) SHARING
Communications UHF/VHF Transmit Switch (4-Way)
• Transmit Switch – IFF IN (INBOARD)
• Transmit Switch – IFF OUT (OUTBOARD)
DMS (Display
Management Switch)
3
5a
TMS (Target
Management Switch)
Radar Cursor/Enable Switch
Depress, Multidirectional
• Used for slewing of the fire control radar cursor or
targeting pod/weapon video.
4
4
HSD Datalink XMT (Transmit) Option
• TNDL (previously “L16”) 2
TGP SOI Box
5b
Transmitting Data
4
1

## Page 629

629
PART 13 – DATALINK & IFF
F-16C
VIPER
RECEIVING DATA
When your wingman receives a SPI (Sensor Point of Interest) shared through the datalink system:
1. A “Data” audio cue is heard
2. On the HUD (Heads-Up Display), the MKPTXXXX DATA indication shows the reference number of the SPI sent to
you, which is “501” in our case.
3. The data recipient will see the transmitted SPI as a line and the reference number of the flight member. You will
also see a dashed, blue line between the transmitting flight member and the target.
4. If you want to see the SPI coordinates, you can go in the STPT DED page and look at STPT No. 501 (reference
number).
5. To remove the MKPTXXXX DATA indication on the HUD, press the Warning Reset Switch DOWN on the ICP.
2 – DATALINK
2.11 – DATA SHARING VIA DATALINK
2.11.2 – SPI (SENSOR POINT OF INTEREST) SHARING
2
5
3
Received SPI
4
Wingman
You

## Page 630

630
PART 13 – DATALINK & IFF
F-16C
VIPER
TDOA (TIME DIFFERENCE OF ARRIVAL) ASSIGNMENT
The TDOA assignment setting stands for “Time Difference of Arrival”; it boils
down to the ability to use participating datalinked team members to quickly
pinpoint a threat radar emitter like a SAM site. This is very useful when
performing SEAD (Suppression of Enemy Air Defences) missions and you
want to triangulate the position of a radar emitter with multiple HTS (HARM
Targeting System) pod operators.
TDOA REQUIREMENTS
TDOA is only available when each Team member is loaded with a HTS pods
(HARM Targeting System). There must also be a minimum of three Team
members in a TDOA team.
For a Team member to participate in the TDOA team, it must have the “T”
enabled next to it in the Datalink DED page. This page is accessed by:
1. Selecting LIST from the ICP
2. Pressing Enter to select Data Link
3. Pressing Dobber RIGHT twice to display the data link assignments of
Team members.
4. “T” assignments can be toggled by pressing Dobber UP and DOWN to
select the Team member and then selecting any ICP keypad buttons 1 to
9 to toggle the TDOA selection
TDOA CONCEPT
In a TDOA team, there is one “TDOA Master” and the remaining members
are referred as “TDOA Slaves”. The TDOA Master can command other TDOA
participant members/slaves to designate the same target with their HTS
pods and provide multiple triangulation angles for a same radar emitter.
2 – DATALINK
2.11 – DATA SHARING VIA DATALINK
2.11.3 – HTS (HARM TARGETING SYSTEM) POD RADAR EMITTER SHARING
T: TDOA (Time Difference
On Arrival) Assignment
T: TDOA (Time Difference
On Arrival) Assignment
1
2
3
4c
Other TDOA Members
triangulating target position
4a
4b

## Page 631

631
PART 13 – DATALINK & IFF
F-16C
VIPER
TDOA TRIANGULATION EXAMPLE
In this example, we will show how a TDOA team can triangulate the
position of a radar emitter. We will assume all TDOA members are
already in the same datalink network and that their respective TDOA
assignment is enabled.
1. Press A-G (Air-to-Ground) Master Mode Button
2. On HSD (Horizontal Situation Display), press OSB next to HSD
Datalink XMT (Transmit) Option to TNDL (Tactical Network Datalink,
formerly referred as “L16” in earlier DCS versions).
3. Power-up the HTS (HARM Targeting System) Pod as shown in Part 11
in the HARM HTS Pod tutorial.
4. Make the HAD (HARM Attack Display) the SOI (Sensor of Interest)
with the DMS (Display Management Switch) DOWN.
5. From the HAD page, select TM for Team members or AL for all to
have all selected TDOA members to participate. If you wish to disable
then, select NO.
6. On the HAD page, designate a radar emitter using the Radar
Cursor/Enable switch and TMS (Target Management Switch) UP.
2 – DATALINK
2.11 – DATA SHARING VIA DATALINK
2.11.3 – HTS (HARM TARGETING SYSTEM) POD RADAR EMITTER SHARING
DMS (Display
Management Switch)
4
TMS (Target
Management Switch)
Radar Cursor/Enable Switch
Depress, Multidirectional
• Used for slewing of the fire control radar cursor or
targeting pod/weapon video.
6
5
HAD SOI Box2
1
4
2
6

## Page 632

8
10
632
PART 13 – DATALINK & IFF
F-16C
VIPER
TDOA TRIANGULATION EXAMPLE
7. After designated an emitter while the cursor is over a target, press TMS
(Target Management System) LEFT for greater than one second. This
will to display “TDOA” on the HUD and command TDOA participant
members to designate the same target with their HTS and provide
multiple triangulation angles.
• Note that the target will need to be within the Team member’s
HTS field of view.
8. When TDOA designated, TD-M indicates that the target has been
designated and that you are the TDOA Master.
9. If you receive a designation as the TDOA Slave, you get a TDOA HUD
message and DATA voice message, and once you designate, you’ll see a
TD-S on the HAD for Target Designated Slave.
10. When a TDOA Team member participant is also tracking the target and
contributing, it will have a segmented, white line between it and the
target. The Position Quality (PGM) value will attain a high precision
value of “1” much faster.
11. To exit TDOA tracking, press TMS (Target Management Switch) DOWN.
2 – DATALINK
2.11 – DATA SHARING VIA DATALINK
2.11.3 – HTS (HARM TARGETING SYSTEM) POD RADAR EMITTER SHARING
TMS (Target
Management Switch)
7b
7c
White Lines: Other TDOA slaves are also
triangulating target position and feeding this
position data across the TDOA datalink network.
10
11
7a 7c

## Page 633

633
PART 13 – DATALINK & IFF
F-16C
VIPER
SENDING DATA
To transmit/broadcast a radar emitter designated with the HTS Pod in the HAD page:
1. Press A-G (Air-to-Ground) Master Mode Button
2. On HSD (Horizontal Situation Display), press OSB next to HSD Datalink XMT (Transmit) Option to
TNDL (Tactical Network Datalink, formerly referred as “L16” in earlier DCS versions).
3. Power-up the HTS (HARM Targeting System) Pod as shown in Part 11 in the HARM HTS Pod tutorial.
4. Make the HAD (HARM Attack Display) the SOI (Sensor of Interest) with the DMS (Display
Management Switch) DOWN.
5. On the HAD page, designate a radar emitter using the Radar Cursor/Enable switch and TMS (Target
Management Switch) UP.
6. Press the Communications UHF/VHF Transmit Switch INBOARD (IFF IN) for more than 0.5 sec. This
will transmit the selected SPI to your flight members in the same datalink network.
2 – DATALINK
2.11 – DATA SHARING VIA DATALINK
2.11.3 – HTS (HARM TARGETING SYSTEM) POD RADAR EMITTER SHARING
Communications UHF/VHF Transmit Switch (4-Way)
• Transmit Switch – IFF IN (INBOARD)
• Transmit Switch – IFF OUT (OUTBOARD)
DMS (Display
Management Switch)
4
6a
TMS (Target
Management Switch)
Radar Cursor/Enable Switch
Depress, Multidirectional
• Used for slewing of the fire control radar cursor or
targeting pod/weapon video.5
5
HSD Datalink XMT (Transmit) Option
• TNDL (previously “L16”) 2
HAD SOI Box
6b
Transmitting Data
5
1

## Page 634

634
PART 13 – DATALINK & IFF
F-16C
VIPER
RECEIVING DATA
When your wingman receives a radar emitter designated with the HTS Pod in the HAD page shared through the
datalink system:
1. A “Data” audio cue is heard
2. On the HUD (Heads-Up Display), the MKPTXXXX DATA indication shows the reference number of the radar
emitter sent to you, which is “107” in our case.
3. The data recipient will see the transmitted radar emitter as yellow symbol with a strike through it and the
reference number of the flight member. You will also see a dashed, blue line between the transmitting flight
member and the target.
4. If you want to see the radar emitter’s coordinates, you can go in the STPT DED page and look at STPT No. 107
(reference number).
5. To remove the MKPTXXXX DATA indication on the HUD, press the Warning Reset Switch DOWN on the ICP.
2 – DATALINK
2.11 – DATA SHARING VIA DATALINK
2.11.3 – HTS (HARM TARGETING SYSTEM) POD RADAR EMITTER SHARING
2
5
3
Received Radar Emitter
4
Wingman
You

## Page 635

635
Identifying what you may or may not shoot should be your primary concern at all times. This is where the IFF (Identify-Friend-or-Foe)
system comes into play.
An IFF system consists of an INTERROGATOR component and a TRANSPONDER component.
The interrogator component broadcasts an interrogation signal with a specific “code” (pulse frequency).
A transponder equipped on another aircraft will receive the interrogation signal and broadcast a reply signal with its own “code”
(pulse frequency) as well. The information sent from this reply signal will vary based on the transponder mode selected.
Your own aircraft transponder will then see if the interrogation code and reply codes match, which in some cases can be used to
determine whether the other aircraft is a friendly contact. The nature of the information determined will vary based on the
transponder mode.
Take note that if you set an incorrect transponder code, friendly contacts may not be able to identify you as a friendly.
3 – IFF (IDENTIFY FRIEND-OR-FOE)
3.1 – IFF INTRODUCTION
PART 13 – DATALINK & IFF
F-16C
VIPER

## Page 636

636
In its simplest form, a "Mode" or interrogation type is generally determined by pulse spacing between two or more interrogation pulses. Various modes exist from Mode 1 to 5 for military use, to
Mode A, C, and Mode S for civilian use. The takeaway from this table should be:
• Mode 4 is the preferred mode in a combat scenario because it is highly secure (encrypted). Encrypted interrogation codes cannot be detected by an enemy transponder, and your transponder
will not broadcast a reply signal to the other team.
• Mode 4 invalid/lack of reply cannot guarantee that an aircraft is hostile, but a valid reply is a guarantee of a friendly contact (within DCS)
• Modes 1, 2, and 3 are not secure to use since any other aircraft from the opposing team could find what your Interrogator code is and set his transponder to it, fooling you into thinking he is a
friendly contact. These modes also easily give away your position since every time your transponder broadcasts an answer, this signal can be intercepted by an enemy transponder, which can
send your position to other enemy fighters via datalink.
Take note that only Mode 4 is simulated as of 2022/01/16.
Military Interrogation Mode Civilian Interrogation Mode Description
1 Provides 2-digit 5-bit mission code
2 Provides 4-digit octal unit code (set on ground for fighters, can be changed in flight by transport aircraft)
3
A Provides a 4-digit octal identification code for the aircraft, set in the cockpit but assigned by the air traffic
controller. Mode 3/A is often combined with Mode C to provide altitude information as well.
C Provides the aircraft's pressure altitude and is usually combined with Mode 3/A to provide a combination of a 4-
digit octal code and altitude as Mode 3 A/C, often referred to as Mode A and C
4 Provides a 3-pulse reply, delay is based on the encrypted challenge
5 Provides a cryptographically secured version of Mode S and ADS-B GPS position
S
Mode S (Select) is designed to help avoiding overinterrogation of the transponder (having many radars in busy
areas) and to allow automatic collision avoidance. Mode S transponders are compatible with Mode A and Mode
C Secondary Surveillance Radar (SSR) systems. This is the type of transponder that is used for TCAS or ACAS II
(Airborne Collision Avoidance System) functions
3 – IFF (IDENTIFY FRIEND-OR-FOE)
3.2 – IFF MODES & PRINCIPLES
PART 13 – DATALINK & IFF
F-16C
VIPER

## Page 637

637
The “Interrogator” component of the IFF system is used to interrogate unknown contacts. The “Transponder”
component of the IFF system is used to respond to interrogations from other aircraft.
3 – IFF (IDENTIFY FRIEND-OR-FOE)
3.2 – IFF MODES & PRINCIPLES
PART 13 – DATALINK & IFF
F-16C
VIPER
Interrogation Code
(Who are you?)
Transponder Code
(Who am I?)
Mode 4 Mode 4
Key A Key A
Interrogation Signal: Who are you? Mode 4 A, by any chance?

## Page 638

FCR (Fire Control Radar) Page
The primary components you will use when performing target identification are the TMS
(Target Management Switch), the FCR (Fire Control Radar) page and the IFF Master Switch,
which powers the IFF system.
Take note that all switches in red on the IFF panel are only meant to be used as a backup only.
In order to use them, the C&I Switch must be set to BACKUP. Otherwise, all IFF codes are set via
the UFC (Up-Front Control) on the ICP (Integrated Control Panel).
IFF Mode 4 Reply Switch
B / A / Out 638
PART 13 – DATALINK & IFF
F-16C
VIPER
3 – IFF (IDENTIFY FRIEND-OR-FOE)
3.3 – IFF COMPONENTS & CONTROLS
IFF (Identify-Friend-or-Foe)
Master Switch
Controls power to the IFF
transponder/interrogator unit.
IFF Mode 4 Code Switch
Zero / A/B / Hold
IFF Mode 4 Monitor Switch
Audio/Out
IFF Enable Switch
• M3/MS
• OFF
• M1/M3
IFF Mode 3
Selector Switches
IFF Mode 1
Selector Switches
C&I (Communication and Identification) Switch
Allows the pilot to toggle between the BACKUP system and the UFC (Up Front Controller).
BACKUP is only used if engine generator failure has occurred.
TMS (Target Management Switch)
LEFT: Interrogates Contact

## Page 639

639
PART 13 – DATALINK & IFF
F-16C
VIPER
The CNI DED page is used to monitor what IFF Transponder
modes and codes are active.
The IFF Menu DED page is used to monitor and set Transponder
codes, which are used to “respond” to IFF interrogations.
Currently, only Mode 4 is available.
Take note that as of 2023/01/28, these codes are already set for
you and cannot be modified yet.
ICP (Integrated Control Panel)
3 – IFF (IDENTIFY FRIEND-OR-FOE)
3.3 – IFF COMPONENTS & CONTROLS
CNI (Communications, Navigation & Identification) DED page
Selected by pressing IFF Button on the ICP
DCS (Data Control Switch, also nicknamed “Dobber”)
IFF Menu Button
Active IFF Transponder Modes
Only Mode 4 is active
IFF Mode 1 Transponder Code & Status
Code: 42, highlighted if active
IFF Mode 2 Transponder Code & Status
Code: 6174, highlighted if active
IFF Mode 3 Transponder Code & Status
Code: 1337, highlighted if active
IFF Visual/Audio feedback Setting
• OUT: No feedback when interrogated by another aircraft with Mode 4
• LIT: Number 4 illuminates on CNI page when you are interrogated with Mode 4
• AUD: You receive an audio tone when you are interrogated with Mode 4
IFF Mode S Transponder Code & Status
IFF Mode C Transponder
Key & Status
IFF Master Mode Status
ON / STBY / OFF / EMER
IFF Mode 4 Transponder Key & Status
Highlighted if active, key not yet simulated
IFF Mode 3 Transponder Code
Selected by pressing the DCS/Dobber
(Data Control Switch) left to RTN
DED (Data Entry Display) IFF Menu
IFF POS (Position) Event Setting
NOF1: Selected Modes change when aircraft flies North of Steerpoint 1
IFF Time Event Setting
01:23 - Selected Modes change when at 01:23

## Page 640

Selected by pressing LIST Button, then pressing
“RCL” to select INTG SCAN Sub-Menu, then
pressing the DCS/Dobber (Data Control Switch)
right to SEQ to select LOS Sub-Menu
640
PART 13 – DATALINK & IFF
F-16C
VIPER
INTG DED Pages are used to monitor and set Interrogator codes, which
are used to interrogate unknown contacts. INTG LOS (Line of Sight) and
INTG SCAN are two different interrogation methods, which are divided
in INTG sub-menus that can be toggled with the Dobber Switch set to
RIGHT (SEQ).
Take note that as of 2023/01/28, these codes are already set for you
and cannot be modified yet.
3 – IFF (IDENTIFY FRIEND-OR-FOE)
3.3 – IFF COMPONENTS & CONTROLS
ICP (Integrated Control Panel)
DCS (Data Control Switch, also nicknamed “Dobber”)
LIST Button
“RCL” Button
IFF coupling options
• DCPL (decoupled): interrogator is
decoupled from the transponder
• ALL (all modes are coupled)
• SOME (some modes are coupled)
IFF Jamming (Not Simulated)
Mode 4 Key
Key: A, highlighted if active
Interrogator Mode 1 Code
Code: 72, highlighted if active
INTG (Interrogator Settings) DED Page – LOS (Line of Sight) Sub-Menu
INTG (Interrogator Settings) DED Page – SCAN Sub-Menu Selected by pressing LIST Button, then pressing
“RCL” to select INTG SCAN Sub-Menu
Interrogator Mode 2 Code
Code: 1234, highlighted if active
Interrogator Mode 3 Code
Code: 7000, highlighted if active

## Page 641

641
PART 13 – DATALINK & IFF
F-16C
VIPER
3 – IFF (IDENTIFY FRIEND-OR-FOE)
3.4 – SETTING IFF CODES
Take note that as of 2023/01/28, IFF codes are already set for you and cannot be modified yet.
IFF Menu – Transponder Codes
INTG SCAN Menu – Interrogator Codes
INTG LOS Menu – Interrogator Codes

## Page 642

642
PART 13 – DATALINK & IFF
F-16C
VIPER
3 – IFF (IDENTIFY FRIEND-OR-FOE)
3.5 – IFF TUTORIAL (MODE 4)
There are two methods of interrogating a target:
• SCAN interrogates all contacts in the radar scan volume.
• LOS (Line of Sight) interrogates a locked target or immediate area around the radar
cursor.
SCAN INTERROGATION METHOD
1. Set the IFF Master Switch to NORM to power up the IFF System.
2. Display SCAN Interrogation Codes by pressing LIST Button, then pressing “RCL” to
select INTG SCAN Sub-Menu
3. (Not Simulated Yet) Set required key/code for Mode 4 IFF Interrogator by pressing
“6” on the ICP (Integrated Control Panel), then pressing “ENTR”. This will set Mode 4
Interrogator key for SCAN mode to “A”.
4. (Not Simulated Yet) Display Transponder Codes by pressing IFF Menu Button,
then set required key/code for Mode 4 IFF Transponder by pressing “6” on the
ICP (Integrated Control Panel), then pressing “ENTR”. This will set Mode 4
Transponder key for mode 4 to “A”.
IFF (Identify-Friend-or-Foe)
Master Switch
Controls power to the IFF
transponder/interrogator unit.
1
2a
2b
2b
2c
4b
3a
3b 3b
Interrogation Code
(Who are you?)
Transponder Code
(Who am I?)
Mode 4 Mode 4
Key A Key A
4a
4c
3a

## Page 643

643
PART 13 – DATALINK & IFF
F-16C
VIPER
3 – IFF (IDENTIFY FRIEND-OR-FOE)
3.5 – IFF TUTORIAL (MODE 4)
SCAN INTERROGATION METHOD
5. Set FCR (Fire Control Radar) page as the Sensor of Interest (SOI) by pressing DMS (Display Management Switch) DOWN.
6. Press TMS (Target Management Switch) LEFT SHORT (1 second or less) to interrogate all contacts in the radar scan volume.
7. If the contact is friendly, a green circle is drawn around the contact for three seconds.
8. If no reply is received, no indication is displayed, and the contact is classified as unknown. These contacts may be assumed to
be hostile depending on the rules of engagement (ROE) in your current scenario.
TMS (Target Management Switch)
DMS (Display Management Switch)
FCR Page is SOI
Unknown Contact has
not replied to our
interrogation signal
FCR Page
Friendly Contact has replied to our
interrogation signal with the
correct transponder code
5
5
6
6
8
7
Interrogator Mode
Mode 4 - SCAN
Radar Scan Volume
“4” symbol inside a
contact means that you
have received a good
response from your Mode
4 Interrogation.

## Page 644

644
PART 13 – DATALINK & IFF
F-16C
VIPER
3 – IFF (IDENTIFY FRIEND-OR-FOE)
3.5 – IFF TUTORIAL (MODE 4)
There are two methods of interrogating a target:
• SCAN interrogates all contacts in the radar scan volume.
• LOS (Line of Sight) interrogates a locked target or immediate area around the radar
cursor.
LOS (LINE OF SIGHT) INTERROGATION METHOD
1. Set the IFF Master Switch to NORM to power up the IFF System.
2. Display LOS Interrogation by pressing LIST Button, then pressing “RCL” to select INTG
SCAN Sub-Menu. Then, press Dobber switch right (SEQ) to select LOS Sub-Menu.
3. (Not Simulated Yet) Set required key/code for Mode 4 IFF by pressing “6” on the ICP
(Integrated Control Panel), then pressing “ENTR”. This will set Mode 4 Interrogator
key for SCAN mode to “A”.
4. (Not Simulated Yet) Display Transponder Codes by pressing IFF Menu Button, then
set required key/code for Mode 4 IFF Transponder by pressing “6” on the ICP
(Integrated Control Panel), then pressing “ENTR”. This will set Mode 4 Transponder
key for mode 4 to “A”.
IFF (Identify-Friend-or-Foe)
Master Switch
Controls power to the IFF
transponder/interrogator unit.
2b
2c
3a
3b
2d
Interrogation Code
(Who are you?)
Transponder Code
(Who am I?)
Mode 4 Mode 4
Key A Key A
4c
1
2a
2b
4b
3b
4a
3a

## Page 645

645
PART 13 – DATALINK & IFF
F-16C
VIPER
3 – IFF (IDENTIFY FRIEND-OR-FOE)
3.5 – IFF TUTORIAL (MODE 4)
LOS (LINE OF SIGHT) INTERROGATION METHOD
5. Set FCR (Fire Control Radar) page as the Sensor of Interest (SOI) by pressing DMS (Display Management Switch)
DOWN.
6. With Radar Cursor/Enable Switch, slew the Acquisition Cursor (ACQ) over the contact you want to interrogate.
7. If desired, you can bug the target by using TMS (Target Management Switch) UP, but this step is not necessary.
8. Press TMS (Target Management Switch) LEFT LONG (more than 1 second) to interrogate the locked target or
immediate area around the radar cursor.
9. If the contact is friendly, a green circle is drawn around the contact for three seconds. Friendly contacts will be
displayed on the HSD (Horizontal Situation Display) as well.
TMS (Target Management Switch)
DMS (Display Management Switch)
Radar Cursor/Enable Switch
FCR Page is SOI
FCR Page
Interrogator Mode
Mode 4 - LOS
Friendly Contact has replied to our
interrogation signal with the
correct transponder code
Acquisition (ACQ) Cursor
8
5
5
6
6
7
8
9
“4” symbol inside a
contact means that you
have received a good
response from your Mode
4 Interrogation.

## Page 646

646
PART 13 – DATALINK & IFF
F-16C
VIPER
3 – IFF (IDENTIFY FRIEND-OR-FOE)
3.5 – IFF TUTORIAL (MODE 4)
LOS (LINE OF SIGHT) INTERROGATION METHOD
10. If no reply is received, no indication is displayed, and the contact is classified as unknown. These contacts may
be assumed to be hostile depending on the rules of engagement (ROE) in your current scenario.
Unknown Contact has
not replied to our
interrogation signal
FCR Page
Interrogator Mode
Mode 4 - LOS
Acquisition (ACQ) Cursor
Acquisition (ACQ) Cursor
6
8
10

## Page 647

Su-25 Target
Identified as Hostile
647
PART 13 – DATALINK & IFF
F-16C
VIPER
3 – IFF (IDENTIFY FRIEND-OR-FOE)
3.6 – NCTR (NON-COOPERATIVE TARGET RECOGNITION)
Non-Cooperative Target Recognition (NCTR) can be used to identify the aircraft type. This system compares turbine blade signatures of different
engines to a database of associated aircraft types. This can be a useful system to identify the aircraft at beyond visual range of up to around 25 nm.
Because NCTR requires the radar to see the engine blades, there some important requirements to meet:
1. The target nose or tail must be within 30-degrees in azimuth and elevation of your nose.
2. The target must be within about 25 nm
3. You must be in Single Target Track (STT) radar mode.
To interrogate with IFF (Identify-Friend-or-Foe) and NCTR at the same time, press and hold Target Management Switch Left for greater than one
second. It will both perform an NCTR print on the target and perform an Identify Friend or Foe interrogation along the line of sight of the STT target.
• Note 1: If the target is outside the range and angle constraints, an INVL, or Invalid, message will appear on the Fire Control Radar, FCR, page.
• Note 2: It’s important to note that performing both an IFF interrogation and an NCTR print implies that you have two identification sources that
allow the Rules of Engagement tree to identify the target as hostile, indicated as red. In plain terms, this means that you will be able to identify
hostile targets with your ownship systems only.
TMS (Target Management Switch)
INVL (Invalid)
Target is beyond 25 nm

## Page 648

648
PART 13 – DATALINK & IFF
F-16C
VIPER
One of the biggest challenges of IFF is that a lack of IFF response does NOT guarantee that the contact you are interrogating is an enemy.
A lack of response could be explained by:
• A friendly aircraft that is damaged and has a damaged transponder
• A friendly aircraft that has not set correct transponder (response) codes
• A friendly aircraft that forgot to turn on his IFF
• A friendly aircraft that is not equipped with an IFF system compatible with yours
• A hostile aircraft
This is why Datalink and IFF are meant to be used together in order to complement the information gathered by your radar, radar warning receiver and other datalink information donors. This
minimizes the chances of friendly fire.
3 – IFF (IDENTIFY FRIEND-OR-FOE)
3.7 – IN CONCLUSION

