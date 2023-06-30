import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Table from "react-bootstrap/Table";
import { FaGithub } from "react-icons/fa6";
import "./surveilance_robot.css";

import projectHeroPic from "../../../public/android_control_surveillace_robot/gallery/clip1.jpg";
import clip2 from "../../../public/android_control_surveillace_robot/gallery/clip2.jpg";
import clip4 from "../../../public/android_control_surveillace_robot/gallery/clip4.jpg";
import clip5 from "../../../public/android_control_surveillace_robot/gallery/clip5.jpg";
import clip6 from "../../../public/android_control_surveillace_robot/gallery/clip6.jpg";
import clip7 from "../../../public/android_control_surveillace_robot/gallery/clip7.jpg";
import clip8 from "../../../public/android_control_surveillace_robot/gallery/clip8.jpg";
import clip9 from "../../../public/android_control_surveillace_robot/gallery/clip9.jpg";

import firmwareAvatar from "../../assets/undraw_firmware_re_fgdy.svg";
import appAvatar from "../../assets/undraw_gaming_re_cma2.svg";
import hostAvater from "../../assets/undraw_pair_programming_re_or4x.svg"
import LegendsPage from "../legends/LegendsPage";

import { parts } from "../../surveilance_robot_parts_data";

function Surveilance_robot() {
  const [allparts, setParts] = useState(parts);

  return (
    <div className="project_body">
      <section className="project_banner">
        <div className="container">
          <h1>Android Control Robot Car</h1>
          <h3>With Surveilance Support</h3>
          <h2>Home / Projects</h2>
        </div>
      </section>

      <section className="about">
        <div className="title">
          <h1>About This Project</h1>
        </div>

        <div className="container">
          <div className="left">
            <div className="img-frame">
              <img src={projectHeroPic} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>Android Control Robot Car</h1>
            <h3>With Surveilance Support</h3>
            <p>
              This is a prototype project of ROBOT CAR based on ARDUINO
              development board by Republic of Legends. Currently it is in BETA
              stage. We are setuping our robot and maintaining stability of our
              robot. Also we are working on ROBOT Firmware. Soon we release and
              implement the firmware.
            </p>

            <br />

            <p>
              In this project, we added ESP32 Camera for surveillance purposes.
              We can use this robot as a mini surveillance robot in any narrow
              place where humans can't reach. Also, we can use this robot as a
              side-moving camera in the stadium for better sports broadcasts
              like a cricket match.
            </p>

            <br />

            <p>
              In Bangladesh perspective this types of robot are so expensive
              because this types of robot are not manufactured in our country.
              Besides, many robotics factories will be established in Bangladesh
            </p>

            <p>
              We are legends joinly working on this project for our upcoming
              semester final practical exam.
            </p>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="container">
          <div class="title">
            <h1>Snapshots</h1>
          </div>
        </div>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={projectHeroPic}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={clip2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={clip4} alt="Third slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={clip5} alt="Third slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={clip6} alt="Third slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={clip7} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={clip8} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={clip9} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="members" id="legends">
        <div className="container">
          {/* <div className="title">
            <h1>Our Project Members</h1>
          </div> */}

          <div className="members-list">
            <LegendsPage />
          </div>
        </div>
      </section>

      <section className="configuration">
        <div className="container">
          <div className="title">
            <h1>Project Parts</h1>
          </div>

          <div className="allParts" id="allParts">
            {allparts.map((part) => {
              return (
                <div className="part">
                  <div className="partImg">
                    <img src={part.photo} alt="" />
                  </div>
                  <div className="partName">
                    <h4>{part.name}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="diagram">
        <div className="container">
          <div className="title">
            <h1>Circuit Diagram</h1>
          </div>

          <div className="circuit">
            <img
              src="https://github.com/rameem2003/Republic-of-Legends/raw/main/assets/robot_car_circuit/RobotCar.SVG"
              alt=""
            />
          </div>

          <div className="download d-flex justify-content-center">
            <a
              className="btn btn-warning my-5 mx-auto"
              href="https://github.com/rameem2003/Republic-of-Legends/blob/main/assets/robot_car_circuit/RobotCar.PDF"
            >
              Download Diagram
            </a>
          </div>
        </div>
      </section>

      <section className="config">
        <div className="container">
          <div className="title">
            <h1>Hardware Specification</h1>
          </div>

          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <td>Parts</td>
                <td>Description</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Main Board</td>
                <td>
                  <b>Arduino UNO</b> <br /> It's a Microcontroller Development
                  Board including ATMega328p 28 pin Microcontroller IC.
                </td>
              </tr>

              <tr>
                <td>Brain (Microcontroller)</td>
                <td>
                  <b>ATMega328p</b> <br /> This is 28 pin Microcontroller IC. 14
                  Digital/Analog pins, 6 Analog Pins, 2 DC Output pins (5V), 4
                  ground pins, 32 KB flash memory, 1KB EEPROM
                </td>
              </tr>

              <tr>
                <td>Display</td>
                <td>
                  <b>
                    {" "}
                    20 collumn, 4 rows blue color alpha-numerical liquid crystal
                    display with I2C LCD driver.
                  </b>
                </td>
              </tr>

              <tr>
                <td>Motor</td>
                <td>
                  <b>12 volt DC gear motor 300 RPM.</b>
                </td>
              </tr>

              <tr>
                <td>Motor Driver</td>
                <td>
                  <b>L298N Motor Driver</b> <br /> Dual H bridge motor driver
                  module with L298N motor driver IC 5 volt
                </td>
              </tr>

              <tr>
                <td>Connectivity</td>
                <td>
                  <b>HC-06 bluetooth module</b> <br /> 4 pin bluetooth module
                  with AT command activated by deafult. 10 meter range. Input
                  voltage 3.6 - 6V
                </td>
              </tr>

              <tr>
                <td>Power</td>
                <td>
                  <b>
                    6800mah 18650 lithium battery 3.7 volt. (4.2 volt full
                    charge) x4
                  </b>
                </td>
              </tr>

              <tr>
                <td>Sound</td>
                <td>
                  <b>5v DC Buzzer.</b>
                </td>
              </tr>

              <tr>
                <td>Camera</td>
                <td>
                  <b>ESP32 WIFI + Bluetooth Camera Module. </b> <br /> OV2640
                  Camera Module 2MP, SD Card Support.
                </td>
              </tr>

              <tr>
                <td>HW-411A LM2596 DC-DC Step Down Adjustable Power Supply</td>
                <td>
                  It is LM2596 DC-DC Buck Converter with voltage rating 4.5-40V
                  to 3-35V. This step down power module is adjustable with a
                  potentiometer.
                </td>
              </tr>

              <tr>
                <td>Firmware / Operating System</td>
                <td>
                  <b>rolOS 3.0</b> Based on Arduino based modified C++
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="firmware">
        <div className="container">
          <div className="title">
            <h1>About Firmware</h1>
          </div>

          <div className="containt">
            <div className="left">
              <img src={firmwareAvatar} alt="" />
            </div>
            <div className="right">
              <h4>
                For our project <b>ROBOT CAR</b>, we are using C++ programming
                language for designing firmware.
              </h4>

              <h4>
                Mainly{" "}
                <a href="https://github.com/rameem2003">
                  Mahmood Hassan Rameem
                </a>{" "}
                & <a href="https://github.com/Fahmida12345">Fahmida Yeasmin</a>{" "}
                are working on firmware
              </h4>

              <div className="developer">
                <div className="member">
                  <div className="img">
                    <img
                      src="https://rameem2003.github.io/oursite/img/gallery/MAHMOOD%20HASSAN%20RAMEEM%201.jpg"
                      alt=""
                    />
                  </div>

                  <div className="name">
                    <h3>M H Rameem</h3>
                  </div>

                  <div className="post">
                    <h4>Programmer</h4>
                  </div>
                </div>

                <div className="member">
                  <div className="img">
                    <img
                      src="https://rameem2003.github.io/oursite/img/gallery/fahmida.jpg"
                      alt=""
                    />
                  </div>

                  <div className="name">
                    <h3>Fahmida Yeasmin</h3>
                  </div>

                  <div className="post">
                    <h4>Programmer</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="story">
        <div class="container">
          <div class="title">
            <h1>Project Story</h1>
          </div>

          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/zeCNsojpB78"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      {/* <section class="camera">
        <div class="conatiner">
            <div class="title">
                <h1>Camera Output</h1>
            </div>
            <video style="width: 75%; display: block; margin: 0 auto; " src="../assets/camera.mp4" controls></video>
        </div>

    </section> */}

      <div class="rolOS p-3 my-3">
        <div class="container">
          <h1 class="text-light">Download The "rolOS" Stable Firmware</h1>
          <div class="download">
            <a
              class="btn btn-warning my-5 mx-auto"
              href="https://github.com/rameem2003/Republic-of-Legends/blob/main/assets/robot_car_circuit/RobotCar.PDF"
            >
              Download Firmware v3.0 Stable
            </a>
            <a
              class="btn btn-outline-warning my-5 mx-auto"
              href="https://github.com/rameem2003/Republic-of-Legends/blob/main/assets/robot_car_circuit/RobotCar.PDF"
            >
              Download Firmware v2.7 Public Beta
            </a>
          </div>
        </div>
      </div>

      <section class="app my-5">
        <div class="container">
          <div class="companion">
            <div class="left">
              <img src={appAvatar} alt="" />
            </div>
            <div class="right">
              <h2>Download The Car Campanion App</h2>

              <div class="download">
                <a
                  class="btn btn-warning my-5 mx-auto"
                  href="https://play.google.com/store/apps/details?id=com.buncaloc.carbluetoothrc&hl=en"
                >
                  Download For Android
                </a>

                <a class="btn btn-warning my-5 mx-auto" href="">
                  Download For IOS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="hosting">
        <div className="container">
            <div className="github">
                <div className="left">
                    <img src={hostAvater} alt="" />
                </div>
                <div className="right">
                    <h2>Project Managed by GITHUB</h2>

                    <a href="https://github.com/rameem2003/Republic-of-Legends" target="_blank"> <FaGithub/> Go to GITHUB <i class="fa-solid fa-share"></i></a>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default Surveilance_robot;
