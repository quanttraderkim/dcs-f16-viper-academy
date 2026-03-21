# Part 15 - Flight Controls & Autopilot

- Pages: `662` to `672`
- Section ID: `part-15-flight-controls-autopilot`

## Page 662

Like the F/A-18 and the Mirage 2000C, the F-16 is equipped with a fly-by-wire system. Fly-by-wire (FBW) is a system that replaces the conventional manual flight controls of an aircraft with
an electronic interface. The movements of flight controls are converted to electronic signals transmitted by wires (hence the fly-by-wire term), and flight control computers determine how to move
the actuators at each control surface to provide the ordered response. The fly-by-wire system also allows automatic signals sent by the aircraft's computers to perform functions without the pilot's
input, as in systems that automatically help stabilize the aircraft, or prevent unsafe operation of the aircraft outside of its performance envelope.
Flying the F-16 feels different from other fighter jets like the F-15. Control surfaces are controlled by a computer: you merely tell the aircraft what you want it to do.
I highly recommend this article about the F-16’s fly-by-wire system. It is very instructive and quite interesting.
http://www.ausairpower.net/AADR-FBW-CCV.html
662
FLIGHT COMPUTER
Control Laws will determine how control
surfaces must be moved in order to
reproduce the movement dictated by
pilot input on joystick
Pilot input on joystick Electrical signal sent to
actuators of control surfaces
FLCS (FLIGHT CONTROL SYSTEM)
PART 15 – FLIGHT CONTROLS & & AUTOPILOT
F-16C
VIPER

## Page 663

663
PART 15 – FLIGHT CONTROLS & & AUTOPILOT
F-16C
VIPER
FLCS (FLIGHT CONTROL SYSTEM)
The FLCS (Flight Control System, also nicknamed “Flickiss”) is a digital four-channel system which hydraulically positions control surfaces. The FLCS has a certain level of control over pitch, roll and
yaw control inputs. Pitch motion is controlled by symmetrical movement of the horizontal tails. Roll motion is controlled by differential movement of the flaperons and horizontal tails. Yaw motion
is controlled by the rudder. Roll coordination is provided by an ARI (Aileron-Rudder Interconnection). The ARI function is not available whenever main landing gear wheel speed exceeds 60 knots or
if the angle of attack exceeds 35 degrees.
Rudder
Horizontal Tail Stabilator
(Stabiliser/Elevator)
Trailing Edge Flaperon (TEF)
(Flap/Aileron)
Leading Edge Flap
(LEF)

## Page 664

664
PART 15 – FLIGHT CONTROLS & & AUTOPILOT
F-16C
VIPER
FLCS (FLIGHT CONTROL SYSTEM)
FLCS OPERATIONAL MODES (GAINS)
The Flight Control System (FLCS) can use three main operation modes, also called “gains”. These gains will modify
how the fly-by-wire system will move the control surfaces.
• Cruise Gains (Normal Operating Mode)
• Active during normal aircraft flight (landing gear up, no FLCS failure)
• Takeoff & Landing Gains
• Active below 400 kts when landing gear is deployed, or when ALT FLAPS switch is set to EXTEND, or when
the air refueling trap door is open
• Standby Gains
• Active when flight control computer has detected a FLCS failure
***********************************************************************************
GUN COMPENSATION
The FLCS automatically compensates for the off-center gun firing and the gun gas emissions during gun firing by
moving the rudder and flaperons. Gun compensation is optimized for 0.7 – 0.9 Mach. Firing outside of those speeds
may create adverse effects.
***********************************************************************************
LEF (LEADING EDGE FLAPS) and TEF (TRAILING EDGE FLAPS)
Leading Edge Flaps are controlled by the FLCS as a function of Mach Number and Angle of Attack.
Trailing Edge Flaps are controlled by the FLCS as a function of the Landing Gear handle position, ALT FLAPS switch
position and airspeed.

## Page 665

665
PART 15 – FLIGHT CONTROLS & & AUTOPILOT
F-16C
VIPER
FLCS (FLIGHT CONTROL SYSTEM)
The Flight Control Computer takes a number of input parameters in order to calculate adequate movements for your flight control surfaces. FLCS controller gains are scheduled by air data inputs, and
sideslip angle and rate is calculated based on the Inertial Navigation System (INS) inputs. Here is a simplified representation of the FLCC (Flight Control Computer).
FLIGHT CONTROL COMPUTER
PITCH INPUTS
• Pitch Trim ––> Mechanical Limit
• Horizontal Tail Stick Force
• Angle of Attack
• Pitch Rate
• Normal Acceleration
• Impact Pressure
ROLL INPUTS
• Roll Trim ––> Mechanical Limit
• Aileron Stick Force
• Roll Rate
YAW INPUTS
• Yaw Trim ––> Mechanical Limit
• Rudder Pedal Force
• Yaw Rate
• Lateral Acceleration
GUN COMPENSATION INPUT
• Gun Fire
INERTIAL NAVIGATION SYSTEM INPUTS
• Angles and Velocities
LEFT & RIGHT HORIZONTAL TAIL/STABILATOR
LEFT & RIGHT FLAPERON
RUDDER

## Page 666

666
PART 15 – FLIGHT CONTROLS & & AUTOPILOT
F-16C
VIPER
FLCS (FLIGHT CONTROL SYSTEM)
FLCS CONFIGURATION MODES & LIMITERS
The Flight Control System (FLCS) can use two main configuration modes: CAT I and CAT III.
Depending on the weapon and external fuel tank loadout, the aircraft will automatically detect what CONFIG setting you should be
in. The STORES CONFIG warning indicates that the FLCS Stores Configuration switch is not set properly.
• CAT I: Air-to-Air configuration, used when Air-to-Air weapons and centreline fuel tank is loaded.
• FCS limits aircraft acceleration from -3 G to +9 G until 15 deg AoA (Angle of Attack) is reached.
• Above 15 deg, max G is a function of AoA and airspeed (+7.3 G at 20 deg AoA, +1G at 25 deg AoA)
• FCS limits max AoA to 25 deg
• Max rudder deflection starts decreasing around 14 deg AoA, then cannot be deflected at 26 deg AoA
• CAT III: Air-to-Ground configuration, used when air-to-ground weapons are mounted and external wing fuel tanks are mounted.
• FCS limits aircraft acceleration from -3 G to +9 G until 15 deg AoA (Angle of Attack) is reached.
• FCS limits max AoA to 15.5 - 15.8 deg
• Commanded roll rate is reduced by 40 % of max commanded roll rate in CAT I in order to reduce risks of roll-coupled
departures from flight
• Max rudder deflection starts decreasing at 3 deg AoA, then cannot be deflected at 15 deg AoA
Notes:
• Note 1: the CAT Config switch is not a “G limiter” selector switch per se. It limits Angle of Attack, which in turn limits maximum
attainable G based on a function of AoA and airspeed.
• Note 2: When the landing gear is deployed (during takeoff/landing), the FLCS gains operate as a pitch rate command system
until 10 deg AoA. Above 10 deg AoA, the FLCS operates as a pitch rate/AoA command system.
• Note 3: Above 35 deg AoA, yaw rate limiter provides roll and yaw axis anti-spin control inputs. It also cuts out stick roll
commands.
• Note 4: Below -5 deg AoA and less than 170 kts, yaw rate limiter provides anti-spin rudder inputs.
STORES CONFIG (Stores Configuration) Switch
Used to limit FLCS (Flight Control System) gains/limits based on
the stores configuration.
• CAT I: Used for air-to-air loadouts.
• CAT III: Used for heavier air-to-ground loadouts or gas-heavy
configurations. FLCS limits the angle of attack and onset rates
in order to increase departure resistance.
STORES CONFIG Caution
STORES CONFIG switch on the gear panel is not in the
correct position for the current loadout.

## Page 667

The F-16 has a number of autopilot “relief modes” that assist the pilot in flying the aircraft.
AUTOPILOT MODES
1. PITCH ATT HOLD: Attitude Hold in the pitch axis. Aircraft will maintain the existing pitch attitude, as long as the attitude is +/- 60 degrees in pitch.
2. ROLL ATT HOLD: Attitude Hold in the roll axis. Aircraft will maintain the existing roll attitude, as long as the attitude is +/- 60 degrees in roll.
3. ALT HOLD: Barometric Altitude Hold. When engaged, aircraft will maintain current barometric altitude
4. HDG SEL: Heading Select. Aircraft will turn to and fly the heading as set on the EHSI (Electronic Horizontal Situation Indicator).
5. STRG SEL: Steering Select. Aircraft will turn to and fly to the active steerpoint.
Take note that pitch and roll modes can be combined together. As an example, you could set STRG SEL and ALT HOLD simultaneously.
The aircraft would then follow the active steerpoint while maintaining your current altitude.
667
PART 15 – FLIGHT CONTROLS & & AUTOPILOT
F-16C
VIPER
AUTOPILOT
Paddle Switch
Disconnects Autopilot
when depressed
Autopilot Roll Mode Switch
• HDG SEL (Heading Select)
• ATT HOLD (Attitude Hold)
• STRG SEL (Steering to selected steer point in
the DED, Data Entry Display)
Autopilot Pitch Mode Switch
• ALT HOLD (Altitude Hold)
• A/P OFF (Autopilot OFF)
• ATT HOLD (Attitude Hold)
HDG SEL (Heading Select) Bug
HDG SEL (Heading Select)
Setting Knob

## Page 668

AUTOPILOT LIMITS
The autopilot will automatically disengage if one of the following conditions is met:
• Paddle Switch (on Stick) is pressed
• TRIM A/P Disc Switch is set to DISC
• Landing Gear is DOWN
• Air Refueling Trap Door is open
• ALT Flaps (Alternate Flaps) switch is set to EXTEND
• Angle of Attack is greater than 15 deg
• DBU (Digital Backup Flight Control Mode) is engaged
• MPO (Manual Pitch Override) switch is held in OVRD
• Autopilot failure or FLCS failure has occured
• Stall Horn is active
668
PART 15 – FLIGHT CONTROLS & & AUTOPILOT
F-16C
VIPER
AUTOPILOT
Trim/AP Disc Switch
• NORM: Stick trims are energized and autopilot is possible
• DISC: Stick trims and autopilot are inhibited
Paddle Switch
Overrides Autopilot
when depressed
Manual Pitch Override Switch
In case of a deep stall departure, the pitch override switch allows you to
command greater authority from the stabs to help get the nose pointed
downhill so you can pick up speed for controlled flight.
Air Refueling Door Control Switch
Alternate Flaps
Extend Switch
Digital Backup (DBU) Switch
Allowing the pilot to manually select a
backup software state of the FLCS

## Page 669

669
PART 15 – FLIGHT CONTROLS & & AUTOPILOT
F-16C
VIPER
AUTOPILOT
AUTOPILOT ALT HOLD (ALTITUDE HOLD) MODE
1. Fly at the desired altitude you want to maintain
2. Set Autopilot Pitch Mode Switch to ALT HOLD. Your current altitude will become
the « reference altitude ».
3. Autopilot will maintain altitude when autopilot was engaged +/- 100 ft.
• Note: Vertical velocity above +2000 ft/min or below -2000 ft/min will
prevent the autopilot from capturing the required altitude.
4. If you want to set a new reference altitude while autopilot is engaged (i.e. the
autopilot is maintaining 10,000 ft and you want to fly to climb and level off at
15,000 ft):
a) Press and hold the Autopilot Paddle switch, and move stick to make the
aircraft climb to desired altitude
b) Autopilot will be disengaged as long as the Paddle switch is held
c) When new target altitude is reached, release the Autopilot Paddle
switch.
d) Upon release the Paddle switch, the autopilot will take the new actual
altitude as the « reference altitude » and maintain this altitude.
5. To disengage autopilot, set Autopilot Pitch Mode Switch to A/P OFF. Paddle
Switch can be held to override autopilot.
NOTE: ALT HOLD can be combined with any Autopilot Roll Mode.
Autopilot Pitch Mode Switch
• ALT HOLD (Altitude Hold)
• A/P OFF (Autopilot OFF)
• ATT HOLD (Attitude Hold)
Paddle Switch

## Page 670

670
PART 15 – FLIGHT CONTROLS & & AUTOPILOT
F-16C
VIPER
AUTOPILOT
AUTOPILOT PITCH ATT HOLD (ATTITUDE HOLD) MODE
1. Set aircraft in desired pitch attitude
2. Set Autopilot Pitch Mode Switch to ATT HOLD.
3. Autopilot will maintain current pitch attitude. Angles above 60 deg in pitch will not be captured.
4. While autopilot is engaged, aircraft pitch can be changed with stick input. Any time the stick is moved,
the attitude hold mode will capture this new attitude and maintain it.
5. To disengage autopilot, set Autopilot Pitch Mode Switch to A/P OFF. Paddle Switch can be held to
override autopilot.
AUTOPILOT ROLL ATT HOLD (ATTITUDE HOLD) MODE
1. Set aircraft in desired roll attitude
2. Set Autopilot Roll Mode Switch to ATT HOLD.
3. Autopilot will maintain current roll attitude. Angles above 60 deg in roll will not be captured.
4. While autopilot is engaged, aircraft roll angle can be changed with stick input. Any time the stick is
moved, the attitude hold mode will capture this new attitude and maintain it.
5. To disengage autopilot, set Autopilot Pitch Mode Switch to A/P OFF. Paddle Switch can be held to
override autopilot.
NOTE: PITCH ATT HOLD and ROLL ATT HOLD can be combined together or with other autopilot modes.
Paddle Switch
Autopilot Pitch Mode Switch
• ALT HOLD (Altitude Hold)
• A/P OFF (Autopilot OFF)
• ATT HOLD (Attitude Hold)
Autopilot Roll Mode Switch
• HDG SEL (Heading Select)
• ATT HOLD (Attitude Hold)
• STRG SEL (Steering to selected steer point in
the DED, Data Entry Display)

## Page 671

671
PART 15 – FLIGHT CONTROLS & & AUTOPILOT
F-16C
VIPER
AUTOPILOT
AUTOPILOT HDG SEL (HEADING SELECT) MODE
1. Turn the HDG knob on the EHSI (Electronic Horizontal Situation Indicator) and set the Heading Select Bug to the desired heading you want to capture.
2. Set Autopilot Pitch Mode Switch to either ATT HOLD (Attitude) or ALT HOLD (Altitude Hold), as desired. Without a Pitch mode active, the autopilot will not be able to engage any roll
mode.
3. Set Autopilot Roll Mode Switch to HDG SEL to engage the Heading Select mode.
4. Autopilot will limit bank angle to 45 deg and steer towards the selected heading until it is captured.
5. To disengage autopilot, set Autopilot Pitch Mode Switch to A/P OFF.
Note: Paddle Switch will not disengage autopilot while in HDG SEL.
Autopilot Pitch Mode Switch
• ALT HOLD (Altitude Hold)
• A/P OFF (Autopilot OFF)
• ATT HOLD (Attitude Hold)
Autopilot Roll Mode Switch
• HDG SEL (Heading Select)
• ATT HOLD (Attitude Hold)
• STRG SEL (Steering to selected steer point in
the DED, Data Entry Display)
HDG SEL (Heading Select) Bug
HDG SEL (Heading Select)
Setting Knob

## Page 672

672
PART 15 – FLIGHT CONTROLS & & AUTOPILOT
F-16C
VIPER
AUTOPILOT
AUTOPILOT STRG SEL (STEERING SELECT) MODE
1. Select steerpoint you want to navigate to.
a) CNI (Communication, Navigation & Information) page must be
selected beforehand (Dobber switch pressed LEFT to RTN)
b) Use DED Increment/Decrement Switch to select desired
steerpoint. We will select Steerpoint 2.
• Alternatively, you can also select a steerpoint by
pressing “STPT (4)” button on the ICP, entering the
Steerpoint Number (i.e. “2” button for Steerpoint 2),
then pressing “ENTR” button.
c) Selected steerpoint will be visible on your HSD (Horizontal
Situation Display) as a white circle
d) Access STPT page by pressing STPT (4) button on the ICP
(Integrated Control Panel).
2. Toggle between MANUAL and AUTOMATIC Steerpoint Sequencing
mode as desired. This is done by pressing the Dobber Switch DOWN to
select the MAN/AUTO data field, then pressing the M-SEL (0) button
to toggle between MAN and AUTO Steerpoint Sequencing.
3. Set Autopilot Pitch Mode Switch to either ATT HOLD (Attitude) or ALT
HOLD (Altitude Hold), as desired. Without a Pitch mode active, the
autopilot will not be able to engage any roll mode.
4. Set Autopilot Roll Mode Switch to STRG SEL to engage the Steering
Select mode.
5. Autopilot will limit bank angle to 45 deg and steer towards the
selected steerpoint until it is captured.
• AUTOMATIC sequencing means that when reaching the
vicinity of the currently selected steerpoint, the autopilot
STRG SEL mode will steer to the next steerpoint automatically.
• MANUAL sequencing means that when reaching the vicinity of
the currently selected steerpoint, the autopilot STRG SEL
mode will circle the steerpoint at a 30 deg bank angle.
6. To disengage autopilot, set Autopilot Pitch Mode Switch to A/P OFF.
Note: Paddle Switch will not disengage autopilot while in STRG SEL.
Autopilot Pitch Mode Switch
• ALT HOLD (Altitude Hold)
• A/P OFF (Autopilot OFF)
• ATT HOLD (Attitude Hold)Autopilot Roll Mode Switch
• HDG SEL (Heading Select)
• ATT HOLD (Attitude Hold)
• STRG SEL (Steering to selected steer point in
the DED, Data Entry Display)
Dobber SwitchDED Increment/Decrement
Switch
Steerpoint Auto
Sequencing
Steerpoint 2 Selected
STPT Page
CNI Page
STPT (4) Button

