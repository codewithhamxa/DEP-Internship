import React from 'react';
import Accordion from './Accordion';

function App() {
  return (
    <div className="App">
      <h1>Interactive Accordion Component</h1>
      <Accordion
        title="What is the 100 Days of Code challenge?"
        content="The 100 Days of Code challenge is a commitment to code every day for 100 days, focusing on improving your skills and building projects. Participants share their daily progress on LinkedIn, helping them stay accountable and motivated while receiving feedback from the community."
      />
      <Accordion
        title="Do I need to code for a specific amount of time each day?"
        content="There isn’t a strict time requirement, but it’s recommended to dedicate at least one hour per day to coding. The goal is consistency, so even short coding sessions count as long as you make daily progress."
      />
      <Accordion
        title="What if I miss a day?"
        content="If you miss a day, don’t worry! The challenge is about consistency and progress, not perfection. Simply pick up where you left off the next day and keep moving forward."
      />
      <Accordion
        title="What will I gain by completing the challenge?"
        content="By completing the 100 Days of Code challenge, you'll build a portfolio of projects, enhance your coding skills, and demonstrate your dedication to potential employers. Plus, you’ll receive a certification recognizing your achievement and participation in the challenge."
      />
      <footer>
        <p>Project completed by <b>M. Hamza Javed</b> as part of the <b>Digital Empowerment Network.</b></p>

      </footer>
    </div>
  );
}

export default App;
