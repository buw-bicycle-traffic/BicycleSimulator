---
sidebar_position: 3
---

# Small Electronics

To help record actions from subjects, modification and small electronics need to be added to the simulator. As stated before these include braking, shifting, steering, but also include heart rate, and power output. Other features which increase realism is the addition of Wind using fans to simulate wind while riding.

## Arduino 

To record data and produce input data for the simulation, small electronic measurement devices needs to be used. To record these, Arduino’s have been used, which can take the small inputs from these electronics and output them to the computer. These Arduino will be responsible for taking the input of the braking and steering functions of the simulator.

## ANT+ 
ANT+ usb is an important piece to communicate with the Wahoo Trainer. This USB will be able to read what information the trainer is producing but as well send information to the trainer as well. It is important to buy a high quality one, so that you have a stable and reliable connection with the trainer through this device.  

## Brakes

Braking was controlled through the bicycle wahoo trainer. This is a very oversimplified braking system with more or less of an off and on switch. The braking is not varying like in the real world where you can vary how much braking force. Instead the braking is either 100% on or not, which removes realism from the simulator.

## Steering

Steering is controlled using a electronic rotary encoder which sends signals to an arduino. The encoder is directly attached to the steering column and takes the measurement and sends them to the arduino. This measurement after being read by the ardino is then sent to the computer to calculate the diretion the simulated bicycle should go in the virtual environment. 

## Wind Simulator

Not yet implemented. Only a household fan was used during experiments to cool off participants. 

## Heart Rate Monitor

For this bicycle simulator a Polar armband monitor was used. This heart rate monitor can be connecct over ANT+ or bluetooth and takes the heart rate from the arm instead of the wrist or from around the chest. Other heart rate monitor can be used that can connect to a bicycle computer or device that can save the heart rate data at 1 second intervals. 

## Power Meter

While bicycling in the real world, a user will have to produce a certain amount of power to move themselves through space. Replicating this is quite simple in a simulator as one just needs to add resistance to a wheel on a simulator and record the movement of the wheel, the input power then can be measured based off the resistance and speed of the wheel. The Wahoo Kickr Smart Bike creates this resistance based on input from the simulation and then the bicycle records and logs the power input from the user, but to improve redundancy in the simulator it is recommended to add power meter pedals to the system. These pedals can also be used in real world testing, to help increase validity of the simulator. It is important to have real world testing for the simulation to make sure that the results are valid. It is especially important when doing studies on gradient, where users need to put out an increased amount of power to be able to climb the said gradient.

In this standard we recommend using the assioma uno duo from Favero Electronics, see Appendix B for more information. These pedals are relatively affordable, but do require modification, as the standard pedals are designed for clipless pedals. We have two solutions for this, one can either 3D print some pedals out of plastic, see the 3D print drawing, or an aluminum pedal can be manufactured, see our drawings for the aluminum pedals. The aluminum pedals are recommended, as they are more robust and create a more stable platform for subjects. Of course other power pedals can be purchased
