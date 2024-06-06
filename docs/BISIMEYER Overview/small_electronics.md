---
sidebar_position: 3
---

# Small Electronics

To help record actions from subjects, modification and small electronics need to be added to the simulator. As stated before these include braking, shifting, steering, but also include heart rate, and power output. Other features which increase realism is the addition of Wind using fans to simulate wind while riding.

## Arduino 

To record data and produce input data for the simulation, small electronic measurement devices needs to be used. To record these, Arduino’s have been used, which can take the small inputs from these electronics and output them to the computer. These Arduino will be responsible for taking the input of the braking and steering functions of the simulator.

## Brakes

XXXXX

## Steering

XXXXX

## Wind Simulator

XXXX

## Heart Rate Monitor

XXXXX

## Power Meter

While bicycling in the real world, a user will have to produce a certain amount of power to move themselves through space. Replicating this is quite simple in a simulator as one just needs to add resistance to a wheel on a simulator and record the movement of the wheel, the input power then can be measured based off the resistance and speed of the wheel. The Wahoo Kickr Smart Bike creates this resistance based on input from the simulation and then the bicycle records and logs the power input from the user, but to improve redundancy in the simulator it is recommended to add power meter pedals to the system. These pedals can also be used in real world testing, to help increase validity of the simulator. It is important to have real world testing for the simulation to make sure that the results are valid. It is especially important when doing studies on gradient, where users need to put out an increased amount of power to be able to climb the said gradient.

In this standard we recommend using the assioma uno duo from Favero Electronics, see Appendix B for more information. These pedals are relatively affordable, but do require modification, as the standard pedals are designed for clipless pedals. We have two solutions for this, one can either 3D print some pedals out of plastic, see the 3D print drawing, or an aluminum pedal can be manufactured, see our drawings for the aluminum pedals. The aluminum pedals are recommended, as they are more robust and create a more stable platform for subjects. Of course other power pedals can be purchased