# Part 7 - Engine & Fuel Management

- Pages: `134` to `152`
- Section ID: `part-7-engine-fuel-management`

## Page 134

134
PART 7 – ENGINE & FUEL MANAGEMENT
F-16C
VIPER

## Page 135

135
PART 7 – ENGINE & FUEL MANAGEMENT
F-16C
VIPER
The F-16C modelled in DCS is powered by the General Electric F110-GE-129 afterburning turbofan engine. The F110
powers more than 70% of today’s most advanced USAF F-16C/D aircraft. Derivatives of the F110 also powered the F-14B
and the South Korean F-15K.
Initially, the F-16 entered service powered by the Pratt & Whitney F100. Seeking a way to drive unit costs down, the
USAF implemented the Alternative Fighter Engine (AFE) program in 1984, under which the engine contract would be
awarded through competition.
Initial orders were for the F110-GE-100 rated at 28,000 lbf (125 kN). Later versions of the F110 include the F110-GE-129
delivering 29,000 lbf (129 kN) thrust.
F110-GE Engine
Credit: F-16.net forums
GENERAL ELECTRIC F110-GE-129 ENGINE

## Page 136

136
PART 7 – ENGINE & FUEL MANAGEMENT
F-16C
VIPER
GENERAL ELECTRIC F110-GE-129 ENGINE
The twin-spool F110 turbofan assembly has a 3-stage fan, 9 high-pressure compressor stages, a single high-pressure turbine stage and 2 low-pressure turbine stages. The engine is equipped with an
annular combustion chamber and an augmentor (afterburner). The pressure ratio at maximum power is 30.7, while the Thrust-to-Weight Radio is 7.29.
Take note that the F-16 is not equipped with any auto-throttle system.
F110-GE-129 Engine Cutaway
Credit: USAF AIB
(United States Air Force Aircraft Investigation Board)
Turbine Frame
Forward Fairing
Augmentor
(Afterburner)
Chamber
Exhaust Duct
Liner
A8 Actuator
(4 each)
Exhaust
NozzleExhaust
DuctActuator
Hydraulic Lines
Turbine
Frame
Turbine
Assembly
Compressor AssemblyFan Assembly

## Page 137

137
PART 7 – ENGINE & FUEL MANAGEMENT
F-16C
VIPER
ENGINE INSTRUMENTS & PARAMETERS Fuel Flow Indicator
(lbs/hour)
Engine Nozzle Position
Indicator (% Open)
Engine Oil Pressure
Indicator (psi)
Engine RPM Indicator (% RPM)
FTIT (Fan Turbine Inlet Temperature)
Indicator (x100 deg C)
ENG FIRE Light
Engine fire detected
HYD/OIL PRESS Light
• Low Oil Pressure: Illuminates when oil pressure has
been below approximately 10 psi for 30 sec.
Extinguishes when oil pressure exceeds 20 psi approx.
• Low Hydraulic Pressure: Illuminates when hydraulic
pressure for either system A or B decreases below 1000
psi.
ENGINE Light
RPM and FTIT indicator signals indicate that an engine overtemperature or flameout has occurred. Illuminates
when the RPM decreases below IDLE, or approximately 2 seconds after FTIT indication exceeds 1100 °C.
ENGINE FAULT Caution
EEC Caution
Fuel/Oil Hot Caution
SEC Caution

## Page 138

138
PART 7 – ENGINE & FUEL MANAGEMENT
F-16C
VIPER
ENGINE LIMITS
ENGINE LIMITS (ON GROUND)
CONDITION FTIT (Fan Turbine Inlet Temperature)
(deg C)
RPM
(%)
Oil Pressure
(psi)
Remarks
Engine Start 935 - - During cold start, oil pressure may be 100 psi for up to 2 minutes
Idle 650 - 15 (minimum) -
MIL/AB (Military/Afterburner) 980 108 25-65 At MIL power and above, oil pressure must increase 10 PSI minimum above IDLE oil pressure
Transient 980 109 25-65 -
Fluctuation +/- 10 +/- 1 +/- 5 Must remain within steady-state limits. Nozzle fluctuations limited to +/- 2 %
ENGINE LIMITS (IN FLIGHT)
CONDITION FTIT (Fan Turbine Inlet Temperature)
(deg C)
RPM
(%)
Oil Pressure
(psi)
Remarks
Engine Start 935 - - -
Idle - - 15 (minimum) -
MIL/AB (Military/Afterburner) 980 108 25-65 Oil pressure must increase as RPM increases
Transient 980 109 25-65 -
Fluctuation +/- 10 +/- 1 +/- 5 Must remain within steady-state limits. Zero oil pressure is allowable for periods up to 1
minute during flight at less than +1 G.

## Page 139

139
PART 7 – ENGINE & FUEL MANAGEMENT
F-16C
VIPER
THROTTLE QUADRANT
OFF Detent
IDLE Detent
MIL (Military) Power Detent
AB (Afterburner) Detent
MAX AB
(Afterburner) Detent
Throttle Stripe
Indicates Throttle Position on Quadrant
Throttle Cutoff Release
Pressed by using “RSHIFT+HOME” (throttle goes
to IDLE) or “RSHIFT+END” (throttle goes to OFF)
Throttle

## Page 140

140
PART 7 – ENGINE & FUEL MANAGEMENT
F-16C
VIPER
ENGINE CONTROL MODES
There are two main engine modes, which are controlled by the Engine Control (ENG CONT) switch:
• PRI (Primary): Primary Mode provides unrestricted engine operation throughout the entire flight envelope.
• SEC (Secondary Engine Control): Secondary Mode provides 70 to 80 % of normal MIL thrust. This mode may
be set manually with the ENG CONT switch or automatically in case of certain failures being detected by the
DEEC (Digital Electronic Engine Control). This level provides a measure of protection against exceeding engine
operating limits and provides sufficient thrust for safe flight operations. This mode also closes exhaust nozzle
and inhibits afterburner operation.
Note: the MAX POWER Switch (also known as “VMax Switch”) is not functional on the F110-GE-129 engine
installed on our airplane. In certain Pratt & Whitney engines, this function is available and was mainly used as a
“Hail Mary switch” to get away as fast as possible. This mode could destroy the engine in a matter of minutes,
which is why it was mainly safetied off or completely disconnected/inhibited from the engine altogether.
AB (Afterburner) Reset Switch
• AB RESET: Attempts to clear DEEC (Digital
Electronic Engine Control) faults
• NORM: Normal (de-energized) position
• ENG DATA: Records engine data in the EDU
(Engine Diagnostic Unit)
ENG CONT (Engine Control) Switch
• PRI: Primary Mode
• SEC: Secondary Mode
Max Power Switch
Inoperative for F110-GE-129 engine

## Page 141

141
PART 7 – ENGINE & FUEL MANAGEMENT
F-16C
VIPER
AFTERBURNER / AUGMENTOR
The afterburner is engaged by throttling past the MIL (Military) Power gate on the throttle quadrant.
The geometry of the throttle quadrant means that depending on the position on the throttle on the
quadrant, the orientation/angle of the throttle must be varied to access certain power detents. To
push the throttle past the MIL Power Detent, the throttle needs to be angled to allow the throttle
stripe past the detent. Within DCS, this is done automatically for you as you throttle up.
Throttle Stripe
MIL Power – Afterburner OFF MAX AB – Afterburner ON
MIL (Military) Power Detent
AB (Afterburner) Detent
MAX AB (Afterburner) Detent
AB – Afterburner ON
MAX AB (Afterburner) Detent

## Page 142

142
PART 7 – ENGINE & FUEL MANAGEMENT
F-16C
VIPER
There is no “afterburner” indication in the cockpit, but you can
monitor the fuel flow indication and the Nozzle Position
indications. Keep in mind that the fuel flow consumption will
increase dramatically; keep an eye on that fuel gauge!
Afterburner OFF Afterburner ON
Fuel Flow Indicator (lbs/hour)
Engine Nozzle Position
Indicator (% Open)
AFTERBURNER / AUGMENTOR

## Page 143

143
PART 7 – ENGINE & FUEL MANAGEMENT
F-16C
VIPER
EPU (EMERGENCY POWER UNIT)
The EPU is a hydrazine-powered, self-contained unit that can provide emergency
hydraulic and electrical power for flight control systems, when bleed air alone is not
enough. The EPU has enough fuel to run for about 10 to 15 minutes.
You would most often use this if you lose your engine, and the EPU would provide power
to the hydraulic and electrical systems, allowing you to keep flying the aircraft since the
flight control systems are not mechanically linked to the stick.
The main requirements for the EPU are that it should be simple, maintenance free, supply
power immediately and consistently for the required time. Use of Hydrazine assures this
while requiring careful handling, but it is very toxic and inflammable.
Important note: the EPU has a safety pin set on the ground, which needs to be removed
by the ground crew prior to the flight. This safety pin is not modelled yet in DCS.
Here is an interesting video on the EPU: https://youtu.be/o8SdArJGWt8
EPU Location
EPU Exhaust Port

## Page 144

144
PART 7 – ENGINE & FUEL MANAGEMENT
F-16C
VIPER
EPU (EMERGENCY POWER UNIT)
There are three main operating modes for the EPU, which are controlled by the EPU Switch.
During normal operation, you should leave the EPU switch to NORM.
• NORM:
• When in NORM mode, EPU system is armed for automatic operation (except during
engine shutdown on the ground).
• If an engine flameout is detected, the EPU will automatically run.
• With the Weight-On-Wheels and throttle in OFF, the EPU will not activate when the
main and standby generators go offline.
• ON:
• When ON, the EPU is commanded to run regardless of failure conditions.
• OFF:
• When on ground, prevents or terminates EPU operation
• When in flight and switch has remained OFF since takeoff, EPU operation is terminated
or inhibited (except when main and standby generator failure is detected).
• OFF will not prevent or terminate EPU operation in flight for main and standby
generator failures if switch was cycled or placed to NORM any time since takeoff
EPU (Emergency Power Unit) Switch
• OFF
• NORM
• ON
EPU RUN Light
• Illuminates when the EPU turbine runs within the proper
range and the EPU hydraulic pressure is above 2000 psi
EPU HYDRAZN (Hydrazine) Light
Illuminates when the EPU is commanding
hydrazine for operation (whether hydrazine is
available or not) or if a primary speed control
failure has occurred.
EPU Air Light
Illuminates whenever the EPU has been
commanded to run with the EPU safety
pin removed. It remains on even when the
EPU is augmented by hydrazine.
EPU (Emergency Power Unit)
Switch Split Safety Guard
EPU Fuel (Hydrazine)
Quantity Indicator (%)

## Page 145

145
A windmilling start is used when
enough altitude and airspeed is
available. Otherwise, a JFS (Jet Fuel
Starter)-assisted start is required.
PART 7 – ENGINE & FUEL MANAGEMENT
F-16C
VIPER
ENGINE RELIGHT PROCEDURE
WINDMILLING RELIGHT
1. When engine flameout occurs, the EPU (Emergency Power Unit) will automatically
activate (provided the EPU switch is set to NORM) to provide you electrical and hydraulic
power for the flight control system. The EPU will be running until it runs out of
fuel/hydrazine (about 10 minutes).
2. Verify ENGINE FEED Selector is set to NORM
3. Throttle back to IDLE, then set throttle to CUTOFF (RSHIFT+END).
4. Immediately nose down to gain enough airspeed for the engine’s compressor blades to
generate enough RPM due to windmilling (air flow drives compressor blades). Ensure
you have enough airspeed to maintain a windmilling engine RPM above 20-25 %.
5. When engine RPM is windmilling above 20-25 %, move throttle from OFF position to
IDLE position (RSHIFT+HOME).
6. Confirm engine RPM and FTIT increase
7. When engine RPM increases above 60 %, throttle up and resume normal operation.
3
OFF Detent 5
IDLE Detent
1
2
Engine RPM
Indicator (% RPM)
FTIT (Fan Turbine Inlet
Temperature) Indicator
(x100 deg C)

## Page 146

146
PART 7 – ENGINE & FUEL MANAGEMENT
F-16C
VIPER
ENGINE RELIGHT PROCEDURE
JFS-ASSISTED RELIGHT
1. When engine flameout occurs, the EPU (Emergency Power Unit) will automatically
activate (provided the EPU switch is set to NORM) to provide you electrical and
hydraulic power for the flight control system. The EPU will be running until it runs out of
fuel/hydrazine (about 10 minutes).
2. Verify ENGINE FEED Selector is set to NORM
3. Throttle back to IDLE, then set throttle to CUTOFF (RSHIFT+END).
4. Set aircraft flight parameters within JFS (Jet Fuel Starter) operation envelope:
• Altitude should be below 20000 ft, airspeed should be below 400 kts
5. Set JFS (Jet Fuel Starter) switch AFT to START2 (Left Click).
6. When the Jet Fuel Starter reaches IDLE RPM (within 30 seconds), the JFS RUN green
light should illuminate.
7. When JFS is operational, the Jet Fuel Starter accumulators will drive the hydraulic
starter motor to start the engine. Engine RPM will increase.
8. When engine RPM reaches 20 %, move throttle from OFF position to IDLE position
(RSHIFT+HOME).
9. The engine should light-off within 10 seconds. Engine RPM and FTIT (Fan Turbine
Inlet Temperature) should increase.
10. When engine RPM increases above 60 %, throttle up and resume normal operation.
A windmilling start is used when
enough altitude and airspeed is
available. Otherwise, a JFS (Jet Fuel
Starter)-assisted start is required.
3
OFF Detent
8
IDLE Detent
1
2
Engine RPM
Indicator (% RPM)
FTIT (Fan Turbine Inlet
Temperature) Indicator
(x100 deg C)
5
6

## Page 147

147
PART 7 – ENGINE & FUEL MANAGEMENT
F-16C
VIPER
FUEL SYSTEM
The F-16 is equipped with 6 internal tanks (left wing, right wing, aft fuselage, aft fuselage reservoir, forward fuselage, forward fuselage reservoir). External fuel tanks can be equipped under the
fuselage (300 Gal) and under the wings (370 Gal). Total fuel quantity is displayed on the fuel indicator. The Fuel Quantity Selector knob is used to choose what fuel quantity you wish you display.
TK300 External Drop Tank
(300 Gal / 2040 lbs)
TK370 External Drop Tank
(370 Gal / 2516 lbs)
TK370 External Drop Tank
(370 Gal / 2516 lbs)

## Page 148

148
Fuel Quantity Selector Knob
• TEST: places both pointers at 2000 lbs, and totalizer should display 6000 lbs
• NORM: AL pointer indicates remaining fuel in the aft left reservoir and the A-1 fuselage tank, and the FR
pointer indicates the sum fuel in the forward right reservoir tank and the F-1 and F-2 fuselage tanks.
• RSVR: moves the AF and FR pointers to display fuel in the aft and forward reservoir tanks
• INT WING: Indicates quantity for internal left and right fuel tanks
• EXT WING: Indicates quantity for external left and right wing-mounted external fuel tanks
• EXT CTR: Indicates quantity for external fuselage-mounted center tank
Fuel Quantity Indicator (x100 lbs)
A/L (Aft & Left) Pointer
F/R (Front & Right) Pointer
Note: indicates center fuel tank load
when Selector Knob set to EXT CTR
Total Fuel Quantity Indicator (lbs)
PART 7 – ENGINE & FUEL MANAGEMENT
F-16C
VIPER
FUEL SYSTEM
External Fuel Transfer Switch
• NORM: allows external centerline tank to empty first
• Wing First: allows the external wing tanks to empty first.

## Page 149

149
Fuel Quantity Indicator (x100 lbs)
A/L (Aft & Left) Pointer
F/R (Front & Right) Pointer
Note: indicates center fuel tank load
when Selector Knob set to EXT CTR
Total Fuel Quantity Indicator (lbs)
PART 7 – ENGINE & FUEL MANAGEMENT
F-16C
VIPER
FUEL SYSTEM
External Wing Tank External Wing Tank
Right Wing TankLeft Wing Tank
F1 Fwd
Fuselage Tank
F2 Fwd
Fuselage Tank
Fwd Reservoir
Tank
Aft Reservoir
Tank
A1 Aft Fuselage
Tank
Centerline External Tank
Main Fuel
Shutoff Valve Fuel Flow Transmitter
To Engine
Ground Receptacle
Air Receptacle
Forward & Right Fuel System
Aft & Left Fuel System
Fuel Transfer on Aft & Left system
Fuel Transfer on Fwd & Right system
Inbound transfer from Air Receptacle and Ground Receptacle
To Engine

## Page 150

Engine Feed Selector Switch
Controls the way the fuel is pumped to the engine. Note that the fuel goes to the engine by gravity feed,
so the engine will not starve when the fuel pumps are OFF. Use of the pumps prevents fuel starvation
during negative G maneuvers and allows manual fuel balance whenever necessary.
• OFF: all fuel pumps are off.
• NORM: all pumps are on, the CG (Centre of Gravity) is maintained automatically.
• AFT: aft pumps are on. Fuel is transferred from the AFT tank to the engine. The CG moves forward.
• FWD: forward pumps are on. Fuel is transferred from the FWD tank to the engine. CG moves back.150
PART 7 – ENGINE & FUEL MANAGEMENT
F-16C
VIPER
FUEL SYSTEM
Air Refueling Door Control Switch
Open / Close
Also sets flight control gains to takeoff & landing mode
Tank Inerting Switch
Reduces internal tank pressurisation when ON. This will pump non-volatile Halon
1301 gas into the fuel tanks to reduce internal pressure and reduce risk for fire
during an emergency… like battle damage.
Fuel Master Switch
Guarded in MASTER position. When placed in OFF the fuel shutoff
valve is closed, preventing fuel from reaching the engine.

## Page 151

151
PART 7 – ENGINE & FUEL MANAGEMENT
F-16C
VIPER
BINGO FUEL
BINGO fuel is the amount of fuel that once reached triggers an immediate return to home
plate (home base). It takes into account the fuel needed to fly the return leg of the flight, the
fuel required to fly the briefed approach, the fuel to go to the alternate (if necessary) and the
emergency fuel which is not supposed to be used except in an emergency.
JOKER fuel is usually set above BINGO as a warning that the bingo is approaching. We usually
set it 1000 lbs above Bingo to allow 1 minute of combat time in afterburner.
Your “BINGO FUEL” can be set by:
1. Pressing the LIST button
2. Pressing “2” on the ICP (Integrated Control Panel) to select BNGO (Bingo Fuel) DED Page.
3. Entering the desired BINGO FUEL value via the ICP keypad, then pressing ENTR.
4. Setting the FUEL QTY SEL knob to NORM to ensure BINGO fuel warning computation is
based on fuselage fuel.
5. When fuel state falls below BINGO fuel limit, a FUEL caution will appear in the HUD and
the VMS (Voice Message System) will give a “BINGO, BINGO” aural cue.
1
2a
2a
2b
3c
3b
3a
4
5

## Page 152

152
PART 7 – ENGINE & FUEL MANAGEMENT
F-16C
VIPER
FLIGHT PLAN BINGO FUEL CALCULATION

