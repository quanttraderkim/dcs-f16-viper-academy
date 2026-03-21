# Part 17 - Air-to-Air Refueling

- Pages: `778` to `791`
- Section ID: `part-17-air-to-air-refueling`

## Page 778

778
INTRODUCTION
AIR-TO-AIR REFUELING – WHY WE ALL HATE IT
Air-to-air refueling is one of the hardest, most hated, and most frustrating tasks in
DCS. Ever. Of all time.
Why? Well, one of the main reasons for the difficulty behind refueling is the skill
required to do formation flying. Flying in formation with another aircraft requires
much more practice than you would initially think. Another reason is pure physics:
there is this thing called “wake turbulence”. An aircraft flies through a fluid: air.
Just like with any fluid, if you have something that displaces itself through it at a
certain speed, the fluid will become disrupted (turbulence). Wingtip vortices and
jetwash are both effects of this simple concept. Wake turbulence is the reason
why airliners need to wait a minimum time between takeoffs: flying through
disrupted air will destabilize the aircraft and it is unsafe, especially during critical
phases of flight like takeoff and landing.
Unfortunately, wake turbulence is something a pilot has to deal with during air-
to-air refueling. This is why the aircraft will fly just fine when approaching the
tanker, but start wobbling around when flying in close proximity of the refueling
basket/drogue and tanker engines.
PART 17 – AIR-TO-AIR REFUELING
F-16C
VIPER
Feel free to consult Redkite’s F-16 Air-to-Air Refueling Tutorial
https://youtu.be/kCews8fZv_o

## Page 779

779
INTRODUCTION
TYPES OF AIR-TO-AIR REFUELING
There are four main air-to-air refueling techniques used in military aviation:
• Probe-and-drogue (refueling probe must be inserted in the tanker’s drogue basket)
• Flying Refueling Boom (guided by boom operator aboard the tanker)
• Buddy Refueling (two fighters can refuel one another independently without a tanker)
• Nose-Probe refueling
F-105 Thunderchiefs being refueled by a Boom system during the Vietnam War Tornado GR4 being refueling by a Probe-and-Drogue system
Refueling Boom
Drogue Basket
Refueling Probe
PART 17 – AIR-TO-AIR REFUELING
F-16C
VIPER

## Page 780

780
INTRODUCTION
TYPES OF AIR-TO-AIR REFUELING
The refueling aircraft available in DCS are:
• The Ilyushin Il-78M “Midas”, a russian probe-and-drogue tanker, which was developed from the Il-76.
• The Boeing KC-135 “Stratotanker”, a US Air Force flying boom tanker, which was developed from the Boeing 367-80.
• The KC-135 MPRS (Multi-point Refueling Systems), a US Air Force KC-135 tanker modified to add refueling pods to the KC-
135's wings, making it useable as a probe-and-drogue tanker.
• The Lockheed S-3B “Viking”, a US Navy probe-and-drogue tanker.
• The Lockheed KC-130 “Hercules”, a USMC probe-and-drogue tanker, which was developed from the C-130.
The F-16C is equipped with a refueling door compatible with a tanker’s flying boom system, so air-to-air refueling can only be
performed from the KC-135 tanker in DCS.
Il-78M
KC-130
S-3B Viking
KC-135 MPRS
KC-135 Stratotanker
PART 17 – AIR-TO-AIR REFUELING
F-16C
VIPER

## Page 781

781
AIR-TO-AIR REFUELING – HOW TO
1. Read your mission briefing to know the TACAN station channel of your KC-135 Tanker (14X) and the
UHF AM channel frequency you can communicate with it (251.000).
2. Power up your TACAN by setting the MIDS LVT switch to ON
3. Adjust TACAN volume as desired
4. Press T-ILS Button on the ICP (Integrated Control Panel) to access TACAN-ILS DED (Data Entry Display)
menu.
5. Press Dobber Switch DOWN to highlight the CHAN field. Use the ICP keypad to type in the new
channel. Press ENTR to accept the changes.
6. If required, you may change the band by selecting the M-SEL (0) button on the ICP, then pressing ENTR.
This toggles the band between X and Y.
7. Toggle the Dobber Switch RIGHT (SEQ) to cycle through TACAN modes until TCN A/A TR (Air-to-Air
Transmit-Receive) is selected.
• Note: Current DCS implementation now requires TACAN mode to be set to T/R (Transmit-
Receive) instead of A/A TR.
8. Press Dobber Switch LEFT (RTN) to return to CNI (Communication, Navigation & Identification) DED
menu. The range to TACAN (nm) will be displayed on the DED.
9. On the EHSI (Electronic Horizontal Situation Indicator), press “M” (Mode Selector) button to select
“TCN” mode. This will slave the EHSI to the TACAN beacon.
1
7a
2
4a
PART 17 – AIR-TO-AIR REFUELING
F-16C
VIPER
3
5a
4b
5b
5c
5d
6a
6c
6b
7b
8a
8b Range to TACAN (nm)
Range to TACAN (nm)
Heading to TACAN
9

## Page 782

782
AIR-TO-AIR REFUELING – HOW TO
10. Verify that C&I Selector (Communication, Navigation aids, and
Identification) is set to UFC (Up Front Control)
11. Press COM1 button on the ICP (Integrated Control Panel) to select UHF
Radio
12. On the ICP, enter frequency the tanker’s UHF frequency as “25100” (251.00
MHz), then press “ENTR” button.
13. Press Communications Transmit Switch AFT and contact tanker (F6).
14. Select “Intent to refuel” in the tanker menu. The tanker will give you an
altitude (usually 20,000 ft or 10,000 ft) to rendezvous at and a speed to
match (i.e. 300 kts).
13a
11
10
PART 17 – AIR-TO-AIR REFUELING
F-16C
VIPER
Communications UHF/VHF Transmit Switch (4-Way)
• AFT: transmits on UHF radio
• FWD: transmits on VHF radio
12c
12b
13b
13c
14a
14b
14c
12a

## Page 783

783
AIR-TO-AIR REFUELING – HOW TO
15. Before attempting a refueling, we need to reduce our workload as much as
possible. One such measure is to display the BINGO FUEL DED page data on
the Heads-Up Display, which means you don’t need to glance at that
awkwardly positioned Fuel Quantity Indicator.
16. Set DED (Data Entry Display) Data Switch FWD, which will allow data from
the DED to be visible on the HUD.
17. Press the LIST button, then press “2” on the ICP (Integrated Control Panel)
to select BNGO (Bingo Fuel) DED Page.
16
PART 17 – AIR-TO-AIR REFUELING
F-16C
VIPER
Fuel Quantity Indicator
17a
17b

## Page 784

784
AIR-TO-AIR REFUELING – HOW TO
18. Open AIR REFUEL trap door.
• Note 1: If refueling with external tanks, this must be done 5 to 6 minutes
prior to refueling to allow the external tanks to depressurize (required if
you want to fill them up with fuel as well).
• Note 2: When door is open, the Flight Control System (FLCS) will change its
control gain to make precise movements easier.
19. Confirm that RDY light illuminates, which indicates that door has opened properly.
20. Set Master Arm switch to OFF.
21. Set RF (Radio Frequency) Switch to SILENT. All electronic signals for the aircraft will
be disabled, including the radar, radar altimeter, data link, TACAN transmit, and
ECM (Electronic Countermeasures). Door Closed
19
18
PART 17 – AIR-TO-AIR REFUELING
F-16C
VIPER
Door Open
21
20

## Page 785

785
PART 17 – AIR-TO-AIR REFUELING
F-16C
VIPER
AIR-TO-AIR REFUELING – HOW TO
22. Once you are close enough, position yourself 20 ft below the refueling boom and
call the tanker to begin pre-contact. If you are lined up properly, he will grant
you permission to approach.
23. Make sure you are perfectly trimmed before beginning your approach.
24. Fly formation with the tanker, not the boom.
25. Perform gentle, small stick inputs to move towards the boom. Do not use rudder
pedals. Use short bursts of throttle to advance towards the tanker.
26. Allow the boom to pass just left or right of your canopy, about 2-3 feet above
your head. This serves as a good first check that you are at the proper height
relative to the tanker.
Refueling Boom
Avoid flying near wingtip vortices

## Page 786

786
PART 17 – AIR-TO-AIR REFUELING
F-16C
VIPER
AIR-TO-AIR REFUELING – HOW TO
27. Continue to move slowly forward, maintaining alignment with the yellow stripe painted on the bottom of the tanker. Use the Pilot Director lights on the bottom of the tanker to maintain a
position within the limits of the boom.
Yellow Stripe
Down-Up (D-U)
Pilot Director Light
PDI (Pilot Director) Lights
Forward-Aft (F-A)
Pilot Director Light

## Page 787

787
PART 17 – AIR-TO-AIR REFUELING
F-16C
VIPER
AIR-TO-AIR REFUELING – HOW TO
28. The PDI (Pilot Director) lights are directive, meaning they tell you the direction to travel and not your current position.
In other words, preface the D, U, F and A with the word Go.
• If the light moves toward the D, go down and if it moves toward the U, go up.
• If the light moves toward the A, go aft and if it moves toward the F, go forward.
• A steady light means a substantial correction is required
• A flashing light means a small correction is required
Down-Up (D-U)
Pilot Director Light
Forward-Aft (F-A)
Pilot Director Light

## Page 788

788
PART 17 – AIR-TO-AIR REFUELING
F-16C
VIPER
AIR-TO-AIR REFUELING – HOW TO
29. Fly formation on the tanker and allow the boom operator to direct the boom
into the refueling receptacle behind the cockpit on your aircraft.

## Page 789

789
AIR-TO-AIR REFUELING – HOW TO
30. The boomer will announce “contact” and ”you are taking fuel” when the connection is established.
31. The AR/NWS light will illuminate. Monitor your fuel transfer on the HUD (Heads-Up Display) and BNGO DED (Data Entry Display) page.
32. Keep the aircraft aligned with the tanker using reference points such as its engines and its centerline. This will help you evaluate if your aircraft drifts or not. Correct one axis at a time only.
PART 17 – AIR-TO-AIR REFUELING
F-16C
VIPER
Reference: Redkite’s F-16 Air-to-Air Refueling Tutorial

## Page 790

790
AIR-TO-AIR REFUELING – HOW TO
33. Refueling procedure will be completed when the “DISC” (Disconnect) warning light illuminates.
34. If you wish to disconnect before that, press your “Nosewheel Steering A/R Disc” button on your HOTAS joystick (or “S” key binding)
to unlatch the boom from your fuel trap door.
35. Close AIR REFUEL trap door and resume flight.
• Note: failing to shut the trap door may result in your aircraft not being able to use fuel from your external tanks.
PART 17 – AIR-TO-AIR REFUELING
F-16C
VIPER
NWS A/R DISC & MSL STEP Button
• A/R: When in flight and the AIR REFUEL switch
in the OPEN position, depressing the button
disconnects boom latching
Reference: Redkite’s F-16 Air-to-Air Refueling Tutorial
35

## Page 791

791
PART 17 – AIR-TO-AIR REFUELING
F-16C
VIPER

