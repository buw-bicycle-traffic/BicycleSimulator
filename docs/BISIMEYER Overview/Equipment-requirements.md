---
sidebar_position: 2
---

# Equipment Requirements

XXXXX

## Bicycle Trainer

The main interactive part of the bicycle simulator is the physical bicycle itself. Many groups have tried varying methods, some have used rollers with a real bike, some have used a bicycle trainer with a bicycle, and some have created totally new simulators from scratch. For this standard it was decided a bicycle trainer from Wahoo, was the best choice as it is an off the shelf trainer. The specific model used is the Wahoo Kickr Smart Bike. The trainer can be adjusted for all sizes and fit requirements, so that the simulator can perfectly fit subjects, the trainer simulates gears and resistance by using a motor and software, and the trainer has a tilt function to help replicate climbing or descending grades. The trainer was selected for these features, as it removes issues as concerns for fit of the simulator for each subject, the ability to replicate the feel for gradients, the ability to have virtual gears and not physical gearing, integrated power measurement, and a stable bicycle format. Other trainer which have been used lack some key features, like the ability to change gradient, virtual gears, and the stability of the simulator itself has been a common issue as the bike frame would twist and bend during testing. For more information on the bike, you can visit Wahoo.com or see the user manual in XXXX. 

Although this bike provides many useful features, it is lacking some features that are required to be added. These modifications include changing the braking action, shifting action, and adding steering action. The changes will be detailed in further detail in the following chapters, and a step-by-step guide of how to build these changes will be included.

## Displays

A display is important when it comes to anything visual and when trying to simulate the world visuals are important. There are many ways to create visuals for simulations. One could use monitors, projectors, VR glasses, AR glasses, or a CAVE system. All these systems have advantages and drawbacks. A quick overview of Advantages and drawbacks can be seen below in Table 2.1. The recommended setup is using monitors for the display of the simulator as the ability to easily change the displays, the affordability, and the advantages of improved realism from other display methods are rather small in comparison to the drawbacks. It is recommended that these displays are on movable stands, so that the visual field can be adjusted for needs and requirements of the research.

![Equipment-Table](./Equipment_table.png)

## Computer

The Simulation computer is the backbone of the simulation and thus is an important part of the bicycle simulator. As it is such an important piece, that gives it importance to have a well working and sufficiently powerful computer. We list here the minimum specification for running the simulation software, but we recommend getting a computer that is more than sufficient to power the simulator, so we recommend more powerful hardware as well.

#### Minimum Hardware Requirements 

- Windows 10 64-bit
- CPU: Min 4 core
- Memory: 8 GB RAM
- GPU: Dedicated Graphics Card with 6 GB of RAM
- Storage: 1 TB SDD or HDD

#### Recommended Hardware Requirements as of 16.01.2024 

- Windows 10 64-bit
- CPU: Min 8 core
- Memory: 32 GB RAM
- GPU: NVIDIA RTX 4070 or better or RX 7800 XT or better
- Storage: 2 TB SDD or HDD

## VR

Although it is the recommendation of this standard to use monitors for the display, it may of be of high interest to use VR as it is more immersive display setup and provides limitless viewing angles to the subjects. VR is fairly easy to implement for a bicycle simulator, especially when using the standard Virtualization software such as Unreal Engine or Unity, which both natively support VR. There are some caveats before launching into using VR for a bicycle simulator. One of those big caveats before purchasing a VR system is buying the correct VR headsets. It is recommended not to purchase any VR headsets from Meta as these headsets are required to be logged into account and in the research field could produce some issues. It is recommended that a headset that is requires no signing in so that can work in a standalone mode. 

Another factor to take into consideration, before purchasing a VR headset, is the tracking method used by the headset. There are two ways that VR tracks it location in space. The first one using tracking stations, which needs at least two tracking stations to track the location of the subject, but tracking is improved when three station are used to track the user as it gives some redundancy to the tracking. This system is fairly reliable and robust for tracking the subject. Another way of doing tracking for VR is outward tracking, which uses cameras and other sensors in the headset to track the position of the users in the space. Although this reduces the need for tracking stations and is fairly reliable sometimes, the headset can lose it sense of position as an error appears due to erroneous data from the camera and sensors in the headset. This may cause some jarring visual effects to the subject. 

The last big factor to really take into consideration is virtual sickness. Although virtual sickness can affect subjects at anytime from any display method, VR seems to increase the effect as it is very immersive and subjects can’t take a quick break from the display unless they take off the headsets. As the immersion is increased and the virtual sickness is increased it can lead to subjects getting sick and thus, leading to stopping the experiment. It is recommended that training be done with subjects while using VR, as it could be the first time users use VR and could be very disorienting and sickening to the subjects. After training, which should include some movement on the simulator with the headset on.
Please take these factors into consideration before moving forward to a VR headset system, as they could play an important role in the research conducted.

## Audio

XXXXX