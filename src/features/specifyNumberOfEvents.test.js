import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import Event from '../Event';
import EventList from '../EventList';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    given('the event list has been loaded', () => {
      AppWrapper = mount(<App />);
      expect(AppWrapper.find('.EventList')).toHaveLength(1);
    });

    when('the user scrolls through the event list', () => {
      expect(AppWrapper.find('.EventList')).toHaveLength(1);
    });

    then(/^the event list should only be (\d+) items long$/, (arg0) => {
     expect(AppWrapper.state('numberOfEvents')).toEqual(32);
    });
  });


  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    let NumberOfEventsWrapper;
    given('the event list has been loaded', () => {
      AppWrapper = mount(<App />);
      expect(AppWrapper.find('EventList')).toHaveLength(1);
    });

    when('the user specifies how many events to show in the filter', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
      const eventObject = { target: { value: '20' }};
      NumberOfEventsWrapper.find('.eventNumber').simulate('change', eventObject);
    });

    then('the event list should only be as long as that specification', () => {
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('20');
    });
  });
});