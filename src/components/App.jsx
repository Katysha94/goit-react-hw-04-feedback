import { useState } from 'react';
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";


export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleFeedback = option => {
    if (option === 'good') {
      setGood(good + 1)
    } else if (option === 'neutral') {
      setNeutral(neutral +1) 
    } else if (option === 'bad') {
      setBad (bad + 1)
    }
  }

  const countTotalFeedback = () => {
    let total = good + neutral + bad
    return total
  }

  const countPositiveFeedbackPercentage = () => {
    if (good === 0) {
      return 0;
    }
     return Math.round((good / countTotalFeedback()) * 100)
  }
   
     return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        background: 'linear-gradient(90deg, #eee8d1, #f8c4af)'
      }}
       >
         <Section title="Please leave feedback" />
         <FeedbackOptions
           options={['good', 'neutral', 'bad']}
           onLeaveFeedback={handleFeedback}
         />
         <Section title="Statistics" />
         {countTotalFeedback() === 0 ?
           (<Notification
           message="There is no feedback"
         />) : 
         (
         <Statistics
           good={good}
           neutral={neutral}
           bad={bad}
           total={countTotalFeedback()}
           positivePercentage={countPositiveFeedbackPercentage()}
         />)}
         
    </div>
  );
  }
 
