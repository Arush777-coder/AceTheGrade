export interface PhysicsPage {
  pageNumber: number;
  chapter: string;
  title: string;
  subtitle?: string;
  type: string;
  content: any;
}

export const physics9Pages: PhysicsPage[] = [
  {
    pageNumber: 1,
    chapter: "Chapter 4: Describing Motion Around Us",
    title: "Key Concepts",
    type: "key-concepts",
    content: {
      intro: "This chapter covers the foundational concepts of kinematics, analyzing how bodies move through space and time.",
      concepts: [
        {
          heading: "Rest and Motion",
          body: "An object is at rest if its position relative to a reference point does not change over time. It is in motion if its position changes over time. Motion is always relative."
        },
        {
          heading: "Reference Point (Origin)",
          body: "A fixed point used to describe the precise position of an object. The choice of reference point determines whether an object is considered at rest or in motion."
        },
        {
          heading: "Distance and Displacement",
          body: "Distance is the actual path length covered by an object (a scalar quantity). Displacement is the shortest straight-line distance between initial and final positions, pointing from start to end (a vector quantity)."
        },
        {
          heading: "Scalars vs. Vectors",
          body: "Scalar quantities (e.g., distance, speed) possess only magnitude and no specific direction. Vector quantities (e.g., displacement, velocity, acceleration) require both magnitude and direction for their complete description."
        },
        {
          heading: "Uniform vs. Non-Uniform Motion",
          body: "An object moving in a straight line covers equal distances in equal time intervals in uniform motion, resulting in constant speed. In non-uniform motion, it covers unequal distances in equal intervals, meaning velocity changes."
        },
        {
          heading: "Acceleration",
          body: "The rate of change of velocity of an object over time. It is a vector quantity, measured in m/s². It occurs when there is a change in speed, direction of motion, or both."
        },
        {
          heading: "Uniform Circular Motion",
          body: "When an object moves along a circular path with a constant speed, its direction of velocity changes continuously. Thus, uniform circular motion is an accelerated motion."
        }
      ]
    }
  },
  {
    pageNumber: 2,
    chapter: "Chapter 4: Describing Motion Around Us",
    title: "Formula & Fact Bank",
    type: "table",
    content: {
      headers: ["Physical Quantity", "Mathematical Formula", "Description / SI Unit"],
      rows: [
        { feature: "Average Speed", plant: "Total Distance / Time Interval", animal: "Measure of how fast an object moves regardless of direction. SI Unit: m/s." },
        { feature: "Average Velocity", plant: "Displacement / Time Interval", animal: "Rate of change of position in a specific direction. SI Unit: m/s." },
        { feature: "Average Acceleration", plant: "a = (v - u) / t", animal: "Rate of change of velocity. SI Unit: m/s²." },
        { feature: "Velocity-Time Relation", plant: "v = u + at", animal: "First Equation of Motion (derived under constant acceleration)." },
        { feature: "Position-Time Relation", plant: "s = ut + 0.5 * a * t²", animal: "Second Equation of Motion (derived under constant acceleration)." },
        { feature: "Position-Velocity Relation", plant: "v² = u² + 2as", animal: "Third Equation of Motion (derived under constant acceleration)." },
        { feature: "Uniform Circular Speed", plant: "v = 2 * pi * R / T", animal: "Speed of an object in a circular path of radius R. SI Unit: m/s." }
      ]
    }
  },
  {
    pageNumber: 3,
    chapter: "Chapter 4: Describing Motion Around Us",
    title: "Watch Out! (Common Traps)",
    type: "traps",
    content: {
      traps: [
        {
          topic: "Instant vs. Interval",
          trap: "Confusing a single instant of time with a duration.",
          correction: "An instant is a specific clock reading (e.g., t = 2s); a time interval is the duration between two readings (e.g., Δt = t2 - t1)."
        },
        {
          topic: "Distance vs. Displacement",
          trap: "Assuming distance and displacement are always equal in magnitude.",
          correction: "They are equal only if motion is along a straight line without reversing back. If an object reverses direction, distance continues to accumulate while displacement decreases. Displacement can be zero even if distance is positive."
        },
        {
          topic: "Acceleration Signs",
          trap: "Assuming negative acceleration always means a body is slowing down.",
          correction: "Negative acceleration is deceleration (slowing down) only if it opposes the direction of velocity. If a body moves in the negative direction, negative acceleration actually increases speed."
        },
        {
          topic: "Zero Acceleration vs. Rest",
          trap: "Believing that zero acceleration means the object is stationary.",
          correction: "An object moving at a constant, high velocity has zero acceleration because its velocity is not changing over time. Rest is just a special case of constant velocity (v = 0)."
        }
      ]
    }
  },
  {
    pageNumber: 4,
    chapter: "Chapter 4: Describing Motion Around Us",
    title: "Exam-Style Solved Problems (Q1-Q10)",
    type: "problems",
    content: {
      problems: [
        { num: 1, type: "Numerical", q: "An athlete runs 100m in 10s and returns 60m back in 6s. Find their average speed.", ans: "Total distance = 100m + 60m = 160m. Total time = 10s + 6s = 16s. Average speed = Total Distance / Total Time = 160 / 16 = 10 m/s." },
        { num: 2, type: "Numerical", q: "In the same scenario, find the average velocity of the athlete.", ans: "Net displacement = 100m - 60m = 40m. Total time = 16s. Average velocity = Net Displacement / Total Time = 40 / 16 = 2.5 m/s." },
        { num: 3, type: "Numerical", q: "A car accelerates from 10 m/s to 15 m/s in 10 s. Find its acceleration.", ans: "Initial velocity u = 10 m/s, final velocity v = 15 m/s, time t = 10 s. a = (v - u) / t = (15 - 10) / 10 = 5 / 10 = 0.5 m/s²." },
        { num: 4, type: "Numerical", q: "A bus stops in 5 s from 15 m/s. Find the acceleration.", ans: "Initial velocity u = 15 m/s, final velocity v = 0 m/s (stops), time t = 5 s. a = (v - u) / t = (0 - 15) / 5 = -15 / 5 = -3 m/s² (deceleration of 3 m/s²)." },
        { num: 5, type: "Numerical", q: "An object dropped from a height attains v = 9.8 m/s in 1 s. Find its acceleration.", ans: "Initial velocity u = 0 m/s (dropped), final velocity v = 9.8 m/s, time t = 1 s. a = (v - u) / t = (9.8 - 0) / 1 = 9.8 m/s²." },
        { num: 6, type: "Analytical", q: "A vehicle is at 20 m position at t = 1 s and at 40 m position at t = 2 s. Find the velocity from the graph slope.", ans: "Slope of position-time graph gives velocity. Slope = (s2 - s1) / (t2 - t1) = (40 - 20) / (2 - 1) = 20 / 1 = 20 m/s." },
        { num: 7, type: "Numerical", q: "A car moves at a constant speed of 20 m/s for 6 s. Find its displacement.", ans: "Area under velocity-time graph represents displacement. Displacement = velocity * time = 20 * 6 = 120 m." },
        { num: 8, type: "Numerical", q: "An object has initial velocity u = 2 m/s, acceleration a = 1 m/s², and time t = 5 s. Find its final velocity.", ans: "Using first equation: v = u + at = 2 + (1 * 5) = 2 + 5 = 7 m/s." },
        { num: 9, type: "Numerical", q: "In problem 8, find the displacement of the object.", ans: "Using second equation: s = ut + 0.5 * a * t² = (2 * 5) + 0.5 * 1 * 5² = 10 + (0.5 * 25) = 10 + 12.5 = 22.5 m." },
        { num: 10, type: "Numerical", q: "A car stops from 30 m/s with a negative acceleration of 4 m/s². Find its stopping distance.", ans: "u = 30 m/s, v = 0 m/s (stops), a = -4 m/s². Using third equation: v² = u² + 2as => 0 = 30² + 2 * (-4) * s => 8s = 900 => s = 112.5 m." }
      ]
    }
  },
  {
    pageNumber: 5,
    chapter: "Chapter 4: Describing Motion Around Us",
    title: "Exam-Style Solved Problems (Q11-Q20)",
    type: "problems",
    content: {
      problems: [
        { num: 11, type: "Conceptual", q: "A child on a merry-go-round makes one complete revolution. Find their net displacement.", ans: "Net displacement is zero because the starting and ending positions of one complete revolution are identical." },
        { num: 12, type: "Numerical", q: "The radius of a circular track is 7 m. Find the distance for one complete revolution.", ans: "Distance = Circumference of circular track = 2 * pi * R = 2 * (22 / 7) * 7 = 44 m." },
        { num: 13, type: "Conceptual", q: "If v = u + at, what does it mean if acceleration a = 0?", ans: "If a = 0, then v = u, meaning velocity remains constant over time (uniform motion)." },
        { num: 14, type: "Conceptual", q: "What does a horizontal straight line parallel to the time-axis on a position-time graph indicate?", ans: "It indicates that position is not changing with time, meaning the object is at rest." },
        { num: 15, type: "Conceptual", q: "What does the area under a velocity-time graph represent?", ans: "It represents the magnitude of displacement of the object during that time interval." },
        { num: 16, type: "Numerical", q: "Acceleration is 0.5 m/s², time is 10 s, and initial velocity is 5 m/s. Find final velocity v.", ans: "v = u + at = 5 + (0.5 * 10) = 5 + 5 = 10 m/s." },
        { num: 17, type: "Numerical", q: "If displacement is 75 m and time is 10 s, find the average velocity.", ans: "Average velocity = Displacement / Time = 75 / 10 = 7.5 m/s." },
        { num: 18, type: "Conceptual", q: "Can speed of an object be constant while its acceleration is non-zero?", ans: "Yes, in uniform circular motion, the speed remains constant while the direction of velocity changes continuously, causing a non-zero centripetal acceleration." },
        { num: 19, type: "Numerical", q: "A bus moves at 10 m/s for 20 s. Find the total distance covered.", ans: "Distance = speed * time = 10 * 20 = 200 m." },
        { num: 20, type: "Numerical", q: "A car starts from rest and accelerates at 2 m/s² for 4 s. Find its final velocity.", ans: "u = 0 (rest), a = 2, t = 4. v = u + at = 0 + (2 * 4) = 8 m/s." }
      ]
    }
  },
  {
    pageNumber: 6,
    chapter: "Chapter 6: How Forces Affect Motion",
    title: "Key Concepts",
    type: "key-concepts",
    content: {
      intro: "This chapter covers dynamics, exploring how forces act as the underlying agents causing changes in state of motion.",
      concepts: [
        {
          heading: "Force",
          body: "A push or pull acting on an object. It can change the state of motion (speed or direction), change the shape/size of an object, or cause stationary objects to move."
        },
        {
          heading: "Balanced Forces",
          body: "When multiple forces act on an object and their net vector resultant is zero. Balanced forces do not change the state of rest or motion of an object."
        },
        {
          heading: "Unbalanced Forces",
          body: "When the net vector resultant of all forces acting on an object is non-zero. Unbalanced forces cause acceleration (change in state of rest/motion)."
        },
        {
          heading: "Inertia",
          body: "The natural tendency of an object to resist changes to its state of rest or uniform motion. Mass is the quantitative measure of inertia (Heavier = More Inertia). Includes Inertia of Rest, Motion, and Direction."
        },
        {
          heading: "Momentum (p)",
          body: "The product of an object's mass and its velocity (p = mv). It is a vector quantity, having the same direction as velocity, measured in kg·m/s."
        },
        {
          heading: "Newton's First Law (Law of Inertia)",
          body: "An object remains in its state of rest or uniform motion in a straight line unless acted upon by an external unbalanced force."
        },
        {
          heading: "Newton's Second Law",
          body: "The rate of change of momentum of an object is directly proportional to the applied unbalanced force in the direction of force (F = ma)."
        },
        {
          heading: "Newton's Third Law",
          body: "To every action, there is an equal and opposite reaction. Action and reaction act on two completely different bodies simultaneously."
        },
        {
          heading: "Law of Conservation of Momentum",
          body: "In an isolated system (where no external forces act), the total linear momentum of colliding bodies remains conserved (constant)."
        }
      ]
    }
  },
  {
    pageNumber: 7,
    chapter: "Chapter 6: How Forces Affect Motion",
    title: "Formula & Fact Bank",
    type: "table",
    content: {
      headers: ["Concept", "Mathematical Formula", "SI Unit / Fact"],
      rows: [
        { feature: "Momentum", plant: "p = m * v", animal: "Vector quantity; measures quality of motion. SI Unit: kg·m/s." },
        { feature: "Force", plant: "F = m * a", animal: "Derived from Newton's second law. SI Unit: Newton (N)." },
        { feature: "Rate of Momentum Change", plant: "F = m(v - u) / t", animal: "Connects force, mass, change of velocity and duration. SI Unit: N." },
        { feature: "Conservation of Momentum", plant: "m1u1 + m2u2 = m1v1 + m2v2", animal: "Applies to collisions within an isolated closed system. SI Unit: kg·m/s." },
        { feature: "Acceleration", plant: "a = (v - u) / t", animal: "Calculates uniform acceleration during force application. SI Unit: m/s²." }
      ]
    }
  },
  {
    pageNumber: 8,
    chapter: "Chapter 6: How Forces Affect Motion",
    title: "Watch Out! (Common Exam Traps)",
    type: "traps",
    content: {
      traps: [
        {
          topic: "Force and Motion association",
          trap: "Believing that 'force causes motion'.",
          correction: "Force does not cause motion, force causes 'acceleration' (change in motion). An object can move at constant velocity without any active force acting on it in a vacuum (e.g., space probes)."
        },
        {
          topic: "Newton's Third Law action-reaction cancellation",
          trap: "Assuming action and reaction cancel each other out since they are equal and opposite.",
          correction: "Action and reaction never cancel each other because they act on 'different' objects. Cancellation can only happen if equal and opposite forces act on the same object."
        },
        {
          topic: "Mass vs. Weight Units",
          trap: "Confusing mass (kg) and force/weight (Newtons) during calculations.",
          correction: "Mass is the quantity of matter (constant, in kg). Weight is the gravitational pull (a force, in Newtons, W = mg). Always convert mass to kg before computing forces."
        },
        {
          topic: "Sign of Vectors",
          trap: "Forgetting to assign signs (+/-) for opposite directional motion.",
          correction: "Force, velocity, and momentum are vectors. If forward is positive (+), any backward recoil, rebound, or opposing friction must be entered as negative (-)."
        }
      ]
    }
  },
  {
    pageNumber: 9,
    chapter: "Chapter 6: How Forces Affect Motion",
    title: "Exam-Style Solved Problems (Q1-Q10)",
    type: "problems",
    content: {
      problems: [
        { num: 1, type: "Numerical", q: "A bullet of 0.02 kg is fired from a gun with a velocity of 100 m/s. Calculate its momentum.", ans: "m = 0.02 kg, v = 100 m/s. Momentum p = m * v = 0.02 * 100 = 2 kg·m/s." },
        { num: 2, type: "Numerical", q: "What force is needed to produce an acceleration of 2 m/s² in a ball of mass 0.5 kg?", ans: "m = 0.5 kg, a = 2 m/s². Force F = m * a = 0.5 * 2 = 1 N." },
        { num: 3, type: "Numerical", q: "An object of 10 kg is moving with 5 m/s. Calculate the force to stop it in 2 seconds.", ans: "m = 10 kg, u = 5 m/s, v = 0 (stop), t = 2 s. a = (v - u) / t = (0 - 5) / 2 = -2.5 m/s². Force F = m * a = 10 * (-2.5) = -25 N (negative indicates opposing force)." },
        { num: 4, type: "Numerical", q: "A car accelerates from 10 m/s to 20 m/s in 5s. If its mass is 1000 kg, find the force exerted by the engine.", ans: "u = 10 m/s, v = 20 m/s, t = 5 s, m = 1000 kg. a = (20 - 10) / 5 = 2 m/s². F = m * a = 1000 * 2 = 2000 N." },
        { num: 5, type: "Conceptual", q: "Why does a cricket fielder pull their hands back while catching a fast ball?", ans: "By pulling hands back, the fielder increases the time (t) taken to stop the ball. Since force F = m(v - u) / t, increasing t decreases the rate of change of momentum, significantly reducing the impact force experienced by the hands." },
        { num: 6, type: "Numerical", q: "Two balls, A (2 kg) and B (3 kg), collide. A moves at 5 m/s, B is at rest. After collision, they stick together. Find the common final velocity.", ans: "m1 = 2 kg, u1 = 5 m/s, m2 = 3 kg, u2 = 0 m/s. Since they stick, combined mass = m1 + m2 = 5 kg. Conservation of momentum: m1u1 + m2u2 = (m1+m2)v => 2 * 5 + 3 * 0 = 5v => 10 = 5v => v = 2 m/s." },
        { num: 7, type: "Numerical", q: "A gun of mass 5 kg fires a bullet of mass 0.05 kg at 200 m/s. Find the recoil velocity of the gun.", ans: "M = 5 kg, m = 0.05 kg, v = 200 m/s. Conservation of momentum: M * V + m * v = 0 => 5 * V + 0.05 * 200 = 0 => 5V + 10 = 0 => V = -2 m/s (opposite direction)." },
        { num: 8, type: "Numerical", q: "An object of 1 kg is thrown at 10 m/s towards an object of 2 kg moving at 5 m/s in the same direction. What is the common velocity after sticking?", ans: "m1 = 1, u1 = 10, m2 = 2, u2 = 5. m1u1 + m2u2 = (m1+m2)v => 1 * 10 + 2 * 5 = 3v => 10 + 10 = 3v => 20 = 3v => v = 6.67 m/s." },
        { num: 9, type: "Numerical", q: "Two hockey players of weights 60 kg and 55 kg are running towards each other. If they run at 5 m/s and -6 m/s respectively and entangle, what is their resultant velocity?", ans: "m1 = 60, u1 = 5. m2 = 55, u2 = -6. m1u1 + m2u2 = (m1+m2)v => 60 * 5 + 55 * (-6) = (60+55)v => 300 - 330 = 115v => -30 = 115v => v = -0.26 m/s." },
        { num: 10, type: "Numerical", q: "A bullet of 10g (0.01 kg) is fired with 400 m/s into a stationary 900g (0.9 kg) wooden block. Find the velocity of the block-bullet system after embedding.", ans: "m1 = 0.01, u1 = 400, m2 = 0.9, u2 = 0. Combined mass = 0.91 kg. m1u1 + m2u2 = (m1+m2)v => 0.01 * 400 + 0 = 0.91v => 4 = 0.91v => v = 4.39 m/s." }
      ]
    }
  },
  {
    pageNumber: 10,
    chapter: "Chapter 6: How Forces Affect Motion",
    title: "Exam-Style Solved Problems (Q11-Q20)",
    type: "problems",
    content: {
      problems: [
        { num: 11, type: "Numerical", q: "A truck starts from rest and rolls down a hill with constant acceleration. It travels 400 m in 20 s. Find the force if its mass is 7 tonnes.", ans: "u = 0, s = 400, t = 20, m = 7 tonnes = 7000 kg. s = ut + 0.5at² => 400 = 0 + 0.5 * a * 20² => 400 = 200a => a = 2 m/s². Force F = m * a = 7000 * 2 = 14000 N." },
        { num: 12, type: "Numerical", q: "A hammer of 500g (0.5 kg) strikes a nail at 50 m/s and comes to rest in 0.01s. What is the force on the nail?", ans: "m = 0.5, u = 50, v = 0, t = 0.01. a = (v - u) / t = (0 - 50) / 0.01 = -5000 m/s². Force F = m * a = 0.5 * (-5000) = -2500 N." },
        { num: 13, type: "Conceptual", q: "Why does a passenger fall forward when a fast bus applies sudden brakes?", ans: "Due to the Inertia of Motion. When brakes are applied, the lower body of the passenger which is in contact with the bus seat comes to rest, while the upper body continues to stay in motion in the forward direction." },
        { num: 14, type: "Numerical", q: "An object of mass 100 kg is accelerated uniformly from a velocity of 5 m/s to 8 m/s in 6 s. Calculate the initial and final momentum.", ans: "Initial momentum pi = m * u = 100 * 5 = 500 kg·m/s. Final momentum pf = m * v = 100 * 8 = 800 kg·m/s." },
        { num: 15, type: "Numerical", q: "Calculate the force exerted by the engine in Problem 14.", ans: "Force F = (pf - pi) / t = (800 - 500) / 6 = 300 / 6 = 50 N." },
        { num: 16, type: "Numerical", q: "A stone of 1 kg is thrown with a velocity of 20 m/s across the frozen surface of a lake and comes to rest after travelling 50 m. What is the force of friction?", ans: "m = 1, u = 20, v = 0, s = 50. v² = u² + 2as => 0 = 20² + 2 * a * 50 => -400 = 100a => a = -4 m/s². Friction force F = m * a = 1 * (-4) = -4 N." },
        { num: 17, type: "Numerical", q: "How much momentum will a dumbbell of mass 10 kg transfer to the floor if it falls from a height of 80 cm and comes to rest in 0.1 s?", ans: "m = 10, h = 80 cm = 0.8 m. Velocity at ground level v = sqrt(2gh) = sqrt(2 * 10 * 0.8) = sqrt(16) = 4 m/s. Initial momentum before hitting floor = m * v = 10 * 4 = 40 kg·m/s. Since it stops, net momentum transferred = 40 kg·m/s." },
        { num: 18, type: "Numerical", q: "Calculate the force applied on the floor by the dumbbell in Problem 17.", ans: "Force F = change in momentum / time = (0 - 40) / 0.1 = -400 N." },
        { num: 19, type: "Conceptual", q: "Why does a person walk forward when pushing the ground backward?", ans: "According to Newton's Third Law, when a person walks, their foot exerts an 'Action' force on the ground in the backward direction. The ground simultaneously exerts an equal and opposite 'Reaction' force on the foot in the forward direction." },
        { num: 20, type: "Numerical", q: "A girl of mass 40 kg jumps with a horizontal velocity of 5 m/s onto a stationary cart of mass 3 kg. What is the velocity of the girl on the cart?", ans: "m1 = 40, u1 = 5. m2 = 3, u2 = 0. Combined mass = 43 kg. Conservation of momentum: m1u1 + m2u2 = (m1+m2)v => 40 * 5 + 0 = 43v => 200 = 43v => v = 4.65 m/s." }
      ]
    }
  },
  {
    pageNumber: 11,
    chapter: "Chapter 7: Work, Energy and Simple Machines",
    title: "Key Concepts - Work & Energy",
    type: "key-concepts",
    content: {
      intro: "This chapter covers the work-energy paradigm, establishing how forces transfer energy to perform work or run simple machines.",
      concepts: [
        {
          heading: "Work Done (W)",
          body: "Work is done by a force on an object when the force displaces the object in the direction of the force. Mathematical expression: W = F * s. Measured in Joules (J)."
        },
        {
          heading: "Conditions for Zero Work",
          body: "Work is zero if: (1) displacement s = 0 (e.g., pushing a concrete wall). (2) applied force F = 0. (3) the force acts perpendicular to the direction of motion (e.g., carrying a bag walking horizontally, gravity acts down while displacement is horizontal)."
        },
        {
          heading: "Positive and Negative Work",
          body: "Work is positive when force and displacement are in the same direction. It is negative when force opposes displacement (e.g., force of friction, goalkeeper stopping a ball)."
        },
        {
          heading: "Energy",
          body: "The capacity of an object to do work. Like work, it is a scalar quantity measured in Joules (J)."
        },
        {
          heading: "Kinetic Energy (KE)",
          body: "Energy possessed by an object by virtue of its motion. K = 0.5 * m * v²."
        },
        {
          heading: "Potential Energy (PE)",
          body: "Energy stored in an object by virtue of its position or configuration. Gravitational PE is U = mgh."
        },
        {
          heading: "Work-Energy Theorem",
          body: "The work done on an object by a net force equals the change in its kinetic energy. W = ΔKE = KE_final - KE_initial."
        },
        {
          heading: "Conservation of Mechanical Energy",
          body: "In the absence of dissipative external forces like friction, the sum of kinetic and potential energy (total mechanical energy) remains constant."
        },
        {
          heading: "Power",
          body: "The rate at which work is done or energy is consumed. P = W / t. SI unit is Watt (W), where 1 W = 1 J/s. Kilowatt-hour (kWh) is the commercial unit of energy."
        }
      ]
    }
  },
  {
    pageNumber: 12,
    chapter: "Chapter 7: Work, Energy and Simple Machines",
    title: "Simple Machines",
    type: "key-concepts",
    content: {
      intro: "Simple machines make work easier by changing the magnitude, direction, or point of application of an applied force.",
      concepts: [
        {
          heading: "Purpose of Simple Machines",
          body: "They make work easier by changing the magnitude or direction of force. Crucially, they do not reduce the total work done (due to conservation of energy)."
        },
        {
          heading: "Pulley Systems",
          body: "A wheel on an axle that supports a cable or belt. A fixed pulley changes the direction of force, providing a Mechanical Advantage (MA) of 1."
        },
        {
          heading: "Inclined Plane",
          body: "A flat supporting surface tilted at an angle, used for raising heavy loads with less effort by increasing the travel distance. Mechanical Advantage MA = Length / Height."
        },
        {
          heading: "Lever",
          body: "A rigid bar pivoting about a fixed point called a fulcrum. It operates on the Principle of Moments: Effort * Effort Arm = Load * Load Arm. MA = Load / Effort = Effort Arm / Load Arm."
        }
      ]
    }
  },
  {
    pageNumber: 13,
    chapter: "Chapter 7: Work, Energy and Simple Machines",
    title: "Watch Out! (Common Exam Traps)",
    type: "traps",
    content: {
      traps: [
        {
          topic: "The 'Tiredness' Trap",
          trap: "Assuming that feeling tired means work has been done.",
          correction: "Physiological tiredness does not equal physical work. If you hold a heavy box stationary or push a solid wall, you feel tired, but since displacement s = 0, the physical work done is strictly zero."
        },
        {
          topic: "The 'Perpendicular' Trap",
          trap: "Calculating non-zero work when carrying load horizontally.",
          correction: "When a student carries a bag horizontally across a floor, the vertical force of gravity acts straight downward, but motion is perpendicular (horizontal). The angle is 90°, making work done by gravity strictly zero."
        },
        {
          topic: "Unit Mismatch (Velocity)",
          trap: "Plugging km/h directly into Kinetic Energy formula.",
          correction: "The formula K = 0.5 * m * v² requires velocity in m/s. Always convert km/h to m/s by multiplying by 5/18 before calculating."
        },
        {
          topic: "Mass vs. Weight in PE",
          trap: "Using weight directly as 'm' in PE = mgh.",
          correction: "Weight is already 'mg'. If a problem states 'a body of weight 50 N is lifted', the PE is simply weight * height = 50 * h. Do not multiply by 'g' again!"
        }
      ]
    }
  },
  {
    pageNumber: 14,
    chapter: "Chapter 7: Work, Energy and Simple Machines",
    title: "Exam-Style Solved Problems (Q1-Q10)",
    type: "problems",
    content: {
      problems: [
        { num: 1, type: "Numerical", q: "A force of 10 N is applied to move an object 5 m in the direction of the force. Calculate the work done.", ans: "F = 10 N, s = 5 m. Work done W = F * s = 10 * 5 = 50 J." },
        { num: 2, type: "Numerical", q: "A student pushes a concrete wall with a force of 50 N. The wall does not move. Calculate the work done.", ans: "Since the displacement s = 0, Work done W = F * s = 50 * 0 = 0 J." },
        { num: 3, type: "Conceptual", q: "A girl carries a 5 kg school bag while walking 10 m horizontally. What is the work done by gravity?", ans: "Gravity acts downward, while displacement is horizontal. The angle between force and displacement is 90° (perpendicular). Work done by gravity is strictly 0 J." },
        { num: 4, type: "Numerical", q: "A crane lifts a 500 kg mass to a height of 10 m in 20 seconds. Calculate its power (take g = 10 m/s²).", ans: "m = 500 kg, h = 10 m, t = 20 s. Work done W = mgh = 500 * 10 * 10 = 50,000 J. Power P = W / t = 50,000 / 20 = 2,500 W." },
        { num: 5, type: "Numerical", q: "How much work is done by a goalkeeper if she applies 200 N force to stop a ball, moving her hand back 0.1 m?", ans: "Force F = 200 N, displacement s = -0.1 m (opposite direction of ball). Work done W = F * s = 200 * (-0.1) = -20 J." },
        { num: 6, type: "Numerical", q: "A ball of mass 0.2 kg has a velocity of 5 m/s. Calculate its Kinetic Energy.", ans: "m = 0.2 kg, v = 5 m/s. KE = 0.5 * m * v² = 0.5 * 0.2 * 5² = 0.1 * 25 = 2.5 J." },
        { num: 7, type: "Conceptual", q: "If the velocity of a vehicle triples, what happens to its Kinetic Energy?", ans: "Since KE is proportional to v² (v_new = 3v), the new KE becomes 3² = 9 times the original Kinetic Energy." },
        { num: 8, type: "Numerical", q: "An object of 10 kg is lifted 5 m high. Calculate its Potential Energy (g = 10 m/s²).", ans: "m = 10 kg, h = 5 m. PE = mgh = 10 * 10 * 5 = 500 J." },
        { num: 9, type: "Conceptual", q: "A ball is dropped from a height. At the midway point, what is the relation between its PE and KE?", ans: "By law of conservation of mechanical energy, the lost PE equals the gained KE. Since it is exactly midway, half the initial PE is converted to KE, so PE = KE." },
        { num: 10, type: "Numerical", q: "A 2 kg stone is thrown up at 20 m/s. What is its KE at the start?", ans: "m = 2 kg, v = 20 m/s. KE = 0.5 * m * v² = 0.5 * 2 * 20² = 400 J." }
      ]
    }
  },
  {
    pageNumber: 15,
    chapter: "Chapter 7: Work, Energy and Simple Machines",
    title: "Exam-Style Solved Problems (Q11-Q20)",
    type: "problems",
    content: {
      problems: [
        { num: 11, type: "Numerical", q: "An inclined plane is 5 m long and 1 m high. What is its Mechanical Advantage (MA)?", ans: "MA of an inclined plane = Length / Height = 5 / 1 = 5." },
        { num: 12, type: "Numerical", q: "Using a lever, an effort of 50 N moves a load of 250 N. Calculate the MA.", ans: "MA = Load / Effort = 250 / 50 = 5." },
        { num: 13, type: "Numerical", q: "In a seesaw, a 30 kg child sits 2 m from the fulcrum. Where should a 60 kg child sit to balance it?", ans: "By Principle of Moments: Load * Load Arm = Effort * Effort Arm => 30 * 2 = 60 * d2 => 60 = 60 * d2 => d2 = 1 m from the fulcrum." },
        { num: 14, type: "Conceptual", q: "A single fixed pulley is used to lift a 10 kg bucket. What is its Mechanical Advantage?", ans: "A fixed pulley only changes the direction of force and does not multiply force, so its Mechanical Advantage is 1." },
        { num: 15, type: "Numerical", q: "If a machine has an MA of 3, how much effort is needed to lift a 600 N load?", ans: "MA = Load / Effort => 3 = 600 / Effort => Effort = 600 / 3 = 200 N." },
        { num: 16, type: "Numerical", q: "A car accelerates from 0 to 20 m/s in 10 s. If mass is 1000 kg, calculate the engine power.", ans: "Initial KE = 0, Final KE = 0.5 * 1000 * 20² = 200,000 J. Work done = Change in KE = 200,000 J. Power P = Work / Time = 200,000 / 10 = 20,000 W." },
        { num: 17, type: "Numerical", q: "Calculate the energy in Joules if a 1 hp motor runs for 1 second (1 hp = 746 W).", ans: "Power P = 746 W, time t = 1 s. Energy = Power * time = 746 * 1 = 746 J." },
        { num: 18, type: "Numerical", q: "A ball (m = 1kg) falls from a height of 10m. What is its speed just before it hits the ground?", ans: "PE_top = KE_bottom => mgh = 0.5 * m * v² => 10 * 10 = 0.5 * v² => 100 = 0.5 * v² => v² = 200 => v = approx 14.14 m/s." },
        { num: 19, type: "Conceptual", q: "Why does an oscillating pendulum eventually come to a stop in real life?", ans: "Due to non-conservative forces like air resistance and friction at the support pivot. Mechanical energy is not destroyed but is continuously dissipated into thermal and sound energy." },
        { num: 20, type: "Numerical", q: "A seesaw has a fulcrum at the center. If one end has an effort arm of 2m and load arm of 2m, find the MA.", ans: "MA = Effort Arm / Load Arm = 2 / 2 = 1." }
      ]
    }
  },
  {
    pageNumber: 16,
    chapter: "Chapter 10: Sound Waves: Characteristics and Applications",
    title: "Key Concepts",
    type: "key-concepts",
    content: {
      intro: "This chapter covers wave mechanics, exploring the generation, propagation, properties, and direct applications of sound waves.",
      concepts: [
        {
          heading: "Nature of Sound",
          body: "Sound is a mechanical longitudinal wave produced by structural vibrations. It strictly requires a material medium (solid, liquid, or gas) to propagate. It cannot travel in a vacuum."
        },
        {
          heading: "Longitudinal Wave Propagation",
          body: "Sound travels as a series of alternate Compressions (regions of high pressure and high density) and Rarefactions (regions of low pressure and low density) in the medium."
        },
        {
          heading: "Speed of Sound",
          body: "Depends on elastic properties, density, and temperature of the medium. Sound travels fastest in solids, slower in liquids, and slowest in gases. Speed increases with temperature."
        },
        {
          heading: "Frequency (v / nu)",
          body: "The number of complete oscillations or compression-rarefaction cycles per unit time. Measured in Hertz (Hz). Nu = 1 / T."
        },
        {
          heading: "Time Period (T)",
          body: "The time taken for one complete oscillation or wave cycle. Measured in seconds (s)."
        },
        {
          heading: "Wavelength (lambda)",
          body: "The linear distance between two consecutive compressions or two consecutive rarefactions. Measured in meters."
        },
        {
          heading: "Amplitude (A)",
          body: "The maximum displacement of particles of the medium from their mean position. Determines loudness (Loudness is proportional to Amplitude²)."
        },
        {
          heading: "Pitch vs. Frequency",
          body: "Pitch is the brain's subjective interpretation of sound frequency. A high-frequency sound has a shrill, high pitch (e.g., whistle), while a low-frequency sound has a flat, low pitch (e.g., drum)."
        },
        {
          heading: "Audibility Range",
          body: "Humans can hear sound between 20 Hz and 20,000 Hz. Sound below 20 Hz is Infrasonic; sound above 20,000 Hz is Ultrasonic."
        }
      ]
    }
  },
  {
    pageNumber: 17,
    chapter: "Chapter 10: Sound Waves: Characteristics and Applications",
    title: "Formula & Fact Bank",
    type: "table",
    content: {
      headers: ["Concept / Relation", "Mathematical Formula", "SI Unit / Practical Fact"],
      rows: [
        { feature: "Wave Equation", plant: "v = lambda * nu", animal: "Relates wave velocity, wavelength, and frequency. SI Unit: m/s." },
        { feature: "Frequency-Period relation", plant: "nu = 1 / T", animal: "Frequency is the reciprocal of the time period. Unit: Hz." },
        { feature: "Time Period", plant: "T = 1 / nu", animal: "Duration of a single complete oscillation. Unit: seconds." },
        { feature: "Echo Distance", plant: "2d = v * t => d = v * t / 2", animal: "Accounts for sound travelling to obstacle and rebounding back. Unit: m." },
        { feature: "Speed in Air", plant: "v = approx 344 m/s (at 20°C)", animal: "Speed of sound increases with humidity and temperature." }
      ]
    }
  },
  {
    pageNumber: 18,
    chapter: "Chapter 10: Sound Waves: Characteristics and Applications",
    title: "Watch Out! (Common Traps)",
    type: "traps",
    content: {
      traps: [
        {
          topic: "The Echo Distance Trap",
          trap: "Using d = vt directly to calculate the distance of an echoing obstacle.",
          correction: "Sound travels to the obstacle and returns, covering a total distance of 2d. Thus, the correct equation to find distance is d = v * t / 2."
        },
        {
          topic: "Frequency and Medium dependency",
          trap: "Assuming frequency of a sound wave changes when it enters a different medium.",
          correction: "Frequency is determined solely by the vibrating source. When sound goes from air to water, its speed and wavelength change, but its frequency remains strictly 'constant'."
        },
        {
          topic: "Loudness vs. Pitch factors",
          trap: "Stating that high pitch means louder sound.",
          correction: "Loudness depends strictly on 'Amplitude'. Pitch depends strictly on 'Frequency'. A mosquito buzz has a very high pitch but low loudness; a lion roar has a low pitch but high loudness."
        },
        {
          topic: "Polarization of Sound",
          trap: "Believing that sound waves can be polarized like light.",
          correction: "Only transverse waves can be polarized. Since sound waves in air are strictly longitudinal, they cannot be polarized under any circumstances."
        }
      ]
    }
  },
  {
    pageNumber: 19,
    chapter: "Chapter 10: Sound Waves: Characteristics and Applications",
    title: "Exam-Style Solved Problems (Q1-Q10)",
    type: "problems",
    content: {
      problems: [
        { num: 1, type: "Numerical", q: "A sound wave has a frequency of 2 kHz and a wavelength of 35 cm. How long will it take to travel 1.5 km?", ans: "Frequency nu = 2000 Hz, wavelength lambda = 0.35 m. Velocity v = lambda * nu = 0.35 * 2000 = 700 m/s. Distance d = 1.5 km = 1500 m. Time t = d / v = 1500 / 700 = 2.14 s." },
        { num: 2, type: "Numerical", q: "If the time period of a wave is 0.02 s, find its frequency.", ans: "Frequency nu = 1 / T = 1 / 0.02 = 50 Hz." },
        { num: 3, type: "Numerical", q: "An echo is heard after 3 s. If the speed of sound is 340 m/s, how far is the reflecting surface?", ans: "Time t = 3 s, v = 340 m/s. Distance d = v * t / 2 = 340 * 3 / 2 = 510 m." },
        { num: 4, type: "Conceptual", q: "Compare the speed of sound in steel against that in air. Explain.", ans: "Sound travels much faster in solids (steel, approx 5900 m/s) than in gases (air, approx 344 m/s). This is because solids have much higher elasticity and particles are closely packed, transferring elastic vibrations faster." },
        { num: 5, type: "Numerical", q: "What is the frequency of a wave with a time period of 0.005 s?", ans: "nu = 1 / T = 1 / 0.005 = 200 Hz." },
        { num: 6, type: "Conceptual", q: "Why is sound heard faster and further on a warm summer day than in cold winter?", ans: "Speed of sound increases with temperature because air molecules have more kinetic energy and vibrate faster. Higher humidity in summer also reduces air density, further increasing speed." },
        { num: 7, type: "Numerical", q: "A sonar device on a submarine sends a signal and receives an echo 5 s later. If the speed of sound in water is 1500 m/s, find the distance to the obstacle.", ans: "t = 5 s, v = 1500 m/s. Distance d = v * t / 2 = 1500 * 5 / 2 = 3750 m." },
        { num: 8, type: "Conceptual", q: "Define the term 'Pitch' of a sound wave.", ans: "Pitch is the auditory sensation by which the listener can differentiate a shrill (high-pitched) sound from a grave or flat (low-pitched) sound. It depends directly on the frequency of the wave." },
        { num: 9, type: "Numerical", q: "If a sound source produces 100 oscillations in 0.5 seconds, find its frequency.", ans: "Frequency = Number of oscillations / Total time = 100 / 0.5 = 200 Hz." },
        { num: 10, type: "Conceptual", q: "Can sound waves be polarized in air?", ans: "No, sound waves in air are longitudinal waves, meaning particles vibrate back and forth along the direction of wave propagation. Polarization is physically possible only for transverse waves." }
      ]
    }
  },
  {
    pageNumber: 20,
    chapter: "Chapter 10: Sound Waves: Characteristics and Applications",
    title: "Exam-Style Solved Problems (Q11-Q20)",
    type: "problems",
    content: {
      problems: [
        { num: 11, type: "Conceptual", q: "How does the amplitude of a sound wave affect the sound heard?", ans: "Amplitude determines the loudness of a sound. A larger amplitude means particles of the medium vibrate with more energy, creating higher pressure variations that strike the eardrum harder, resulting in a louder sound." },
        { num: 12, type: "Numerical", q: "What is the minimum distance required from an obstacle to hear a distinct echo at 20°C (speed of sound = 344 m/s)?", ans: "The human brain retains any sound sensation for at least 0.1 s (persistence of hearing). To hear a distinct echo, the reflected sound must arrive after 0.1 s. Distance d = v * t / 2 = 344 * 0.1 / 2 = 17.2 m." },
        { num: 13, type: "Conceptual", q: "Distinguish between Infrasonic and Ultrasonic sound waves with examples.", ans: "Infrasonic waves have frequencies less than 20 Hz (e.g., seismic waves of earthquakes, whale communications). Ultrasonic waves have frequencies exceeding 20,000 Hz (e.g., bat echolocation, medical ultrasound imaging)." },
        { num: 14, type: "Numerical", q: "A wave moves at 340 m/s with a wavelength of 2 m. Find its frequency.", ans: "v = lambda * nu => 340 = 2 * nu => nu = 170 Hz." },
        { num: 15, type: "Conceptual", q: "Why do we always see lightning flash instantly but hear the thunder clap several seconds later?", ans: "This occurs due to the massive difference in speeds. Speed of light is astronomical (3 * 10^8 m/s), making the flash instant, while speed of sound in air is relatively slow (approx 344 m/s), requiring about 3 seconds to cover 1 km." },
        { num: 16, type: "Conceptual", q: "What is SONAR? State its primary industrial application.", ans: "SONAR stands for SOund Navigation And Ranging. It uses ultrasonic waves sent from a transmitter down into water; the time taken for the echo to rebound is measured to calculate the depth of seabeds or locate submerged ships and icebergs." },
        { num: 17, type: "Conceptual", q: "Does changing the medium of propagation affect the frequency of a sound wave?", ans: "No, frequency is a characteristic of the wave source. When a wave enters another medium, its speed and wavelength change proportionally, but the frequency remains strictly unchanged." },
        { num: 18, type: "Conceptual", q: "What is a Rarefaction in wave mechanics?", ans: "A rarefaction is a region in a longitudinal wave where the particles of the medium are spread furthest apart, corresponding to low pressure and low volume density." },
        { num: 19, type: "Conceptual", q: "Explain why sound is louder when its amplitude is high.", ans: "A higher amplitude means a greater physical displacement of air particles. This creates greater compressive force on the eardrum, causing more intense physical vibrations that our auditory system translates as a louder sound." },
        { num: 20, type: "Numerical", q: "A sound wave has a time period of 0.01 s. Find its frequency.", ans: "nu = 1 / T = 1 / 0.01 = 100 Hz." }
      ]
    }
  }
];
