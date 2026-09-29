import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Moviecard }  from './App.jsx';
import { Practice } from './practices.jsx';
import Profile from './components/Profile.jsx';
import { EventHandling } from './components/Events.jsx';
import { State } from './Hooks/other/State.jsx';
import { DerivedState2 } from './Hooks/other/DerivedState.jsx';
import { LiftstateUp } from './Hooks/other/LiftingState.jsx';
import { ToggleSwitch } from './Projects/ToggleSwitch/ToggleSwitch.jsx';
import ShortCircuit from './components/ShortCircuit.jsx';
import { Counter }from './Hooks/useState/index.jsx';
import CounterChallenge from './Hooks/useState/Challenge.jsx';
import { RegistrationForm } from './Hooks/useState/Registration.jsx';
import { LoginForm } from './Hooks/useState/LoginForm.jsx';
import { ContactForm } from './Hooks/useState/ContactFrom.jsx';
import { Challenge } from './Hooks/UseEffect/EffectChallenge.jsx';
import { UseRefs } from './Hooks/UseRef/index.jsx';
import { UseForward } from './Hooks/UseRef/useForward.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Moviecard /> */}
    {/* <Practice /> */}
     {/* challenge file */}
    {/* <Profile /> 
    <EventHandling />
    <State /> */}
    {/* <DerivedState2 /> */}
    {/* <LiftstateUp /> */}
    {/* Mini Project */}
    {/* <ToggleSwitch /> */}
    {/* <ShortCircuit /> */}
    {/* <Counter /> */}
    {/* <CounterChallenge /> */}
    {/* <RegistrationForm /> */}
    {/* <LoginForm /> */}
    {/* <ContactForm /> */}
    {/* <Challenge /> */}
    {/* <UseRefs /> */}
    <UseForward />
  </StrictMode>,
)
