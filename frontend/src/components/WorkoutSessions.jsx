import React from 'react';

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSIONS </h1>
        <p>Whether you're into intense strength training, high-intensity interval training (HIIT), or yoga, these top workout sessions are designed to challenge and enhance your fitness level. </p>
        <img src="/img5.jpg" alt="workout" /> 
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS </h1>
        <p>These bootcamps are designed to push your limits, challenge your body, and take your fitness to the next level.</p>
        <div className="bootcamps">
            <div>
                <h4>1. High-Intensity Fat Burning Bootcamp</h4>
                <p>hether you're looking to lose weight or boost endurance, this camp is for you.</p>
            </div>
            <div>
                <h4>2.Strength & Conditioning Bootcamp</h4>
                <p>This bootcamp is all about building muscle and improving strength with weightlifting and functional movements. Perfect for those looking to increase power and endurance</p>
            </div>
            <div>
                <h4>3.Cardio Kickboxing Bootcamp</h4>
                <p>If you love high-energy workouts, this bootcamp is perfect for you. Kickboxing moves combined with cardio drills will help improve coordination, burn fat, and increase cardiovascular fitness</p>
            </div>
            <div>
                <h4>4.Total Body Transformation Bootcamp</h4>
                <p>This all-inclusive bootcamp combines strength training, HIIT, and flexibility exercises, providing a full-body workout that targets every muscle group. </p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default WorkoutSessions;
