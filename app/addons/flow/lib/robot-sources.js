/* SPDX-License-Identifier: Apache-2.0 */
/**
 * robot-sources.js — where every robot format's syntax came from (0.9 SU.1128). Data only, no imports.
 * Rule (owner, 2026-11-06): a vendor language is written only when the statements the writer emits are confirmed by at least TWO
 * independent public sources that were read on SOURCES_DATE (same publisher, two editions of one manual, do not count as two).
 * Nothing was typed from memory. `LEFT_OUT` lists every language considered and not written, with the reason.
 * The sources were read as text (manuals converted with pdftotext); some wiki pages (wiki.ros.org, docs.ros.org) refused the reader.
 */
export const SOURCES_DATE = '2026-11-06';

export const FORMAT_SOURCES = {
  csv: { urls: [], note: 'Our own list: no outside specification.' },
  json: { urls: [], note: 'Our own list (format cadcraft-robot-path, version 1): no outside specification.' },
  urdf: {
    urls: [
      'https://raw.githubusercontent.com/ros/urdfdom/master/xsd/urdf.xsd',
      'https://raw.githubusercontent.com/ros/urdfdom/master/urdf_parser/src/joint.cpp',
      'https://raw.githubusercontent.com/ros/urdfdom_headers/master/include/urdf_model/pose.h',
    ],
    note: 'Schema and parser read: robot, link, joint (revolute, prismatic, fixed), parent, child, origin xyz rpy, axis, limit; the parser requires effort and velocity on revolute and prismatic limits (we write effort="0" as a placeholder and say so in the file). Roll, pitch, yaw are composed as Rz Ry Rx. Units (radians, metres) are the ROS convention; wiki.ros.org refused the reader, so the unit statement was not re-read.',
  },
  trajectory: {
    urls: [
      'https://raw.githubusercontent.com/ros2/common_interfaces/rolling/trajectory_msgs/msg/JointTrajectory.msg',
      'https://raw.githubusercontent.com/ros2/common_interfaces/rolling/trajectory_msgs/msg/JointTrajectoryPoint.msg',
      'https://raw.githubusercontent.com/ros2/rcl_interfaces/rolling/builtin_interfaces/msg/Duration.msg',
      'https://github.com/ros/common_msgs/blob/noetic-devel/trajectory_msgs/msg/JointTrajectoryPoint.msg',
      'https://raw.githubusercontent.com/ros2/ros2cli/rolling/ros2topic/ros2topic/verb/pub.py',
    ],
    note: 'JointTrajectory: header, joint_names, points; each point has positions, velocities, accelerations, effort and time_from_start (ROS 2 Duration: sec, nanosec). Written as JSON with those field names; positions only, velocities left empty. Signals are not part of the message.',
  },
  urscript: {
    urls: [
      'https://s3-eu-west-1.amazonaws.com/ur-support-site/115824/scriptManual_SW5.11.pdf (The URScript Programming Language for e-Series 5.11)',
      'https://github.com/glinvad/UR_Scripting (README, community author)',
      'https://docs.universal-robots.com/tutorials/urscript-tutorials/socket-communication.html (UR tutorial; same publisher as the manual, used only as a cross-check)',
    ],
    note: 'Confirmed by the manual and the independent community page: def name(): ... end, movej with a joint list, movel with p[x,y,z,rx,ry,rz], a= and v= keywords, set_digital_out(n, True/False), get_standard_digital_in, sleep(t). The manual marks set_digital_out as deprecated in favor of set_standard_digital_out; we write the form both pages show. No set_tcp, frame or blend statements are written (one source each).',
  },
};

export const LEFT_OUT = [
  { id: 'fanuc', name: 'Fanuc TP / LS', why: 'no maker manual could be read; comment, DO and WAIT DI syntax rest on one blog or lint tool.' },
  { id: 'yaskawa', name: 'Yaskawa INFORM', why: 'the job header and position records are shown only by one forum; tool and frame selection and speed have one source each.' },
  { id: 'kawasaki', name: 'Kawasaki AS', why: 'the only two sources are two editions of the maker\'s own manual (not independent); the saved-file layout is not shown by either.' },
  { id: 'melfa', name: 'Mitsubishi MELFA BASIC', why: 'tool and base selection and the position flag group are not confirmed by any source read; the two Festo documents are one source family.' },
  { id: 'staubli', name: 'Staubli VAL3', why: 'no maker manual could be read; the XML program shape and I/O statements are unconfirmed.' },
  { id: 'denso', name: 'Denso PAC', why: 'only one maker manual (2002 legacy PAC) was read; tool, work and I/O syntax have no second source, and current PacScript has no readable source.' },
  { id: 'abb', name: 'ABB RAPID', why: 'moves, SetDO, WaitDI, comments and declarations are confirmed by two sources, but WaitTime, what the v-numbers mean in mm/s and the zone names rest on ABB\'s reference manual alone (the other pages are prose or code without them). Closest to ready: one more printed WaitTime and speed source would add it.' },
  { id: 'kuka', name: 'KUKA KRL', why: 'program header, PTP / LIN, $OUT, WAIT FOR $IN, WAIT SEC, $VEL.CP, $ACC.CP, $VEL_AXIS and C_DIS are confirmed by two documents, but millimetres for X, Y, Z and the ZYX meaning of A, B, C (needed for every Cartesian target) have one maker source plus one university write-up that gives no units. Closest to ready after URScript.' },
];
