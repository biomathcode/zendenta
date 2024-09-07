"use client";

import { useRef } from "react";
import styled from "styled-components";
import { useCalendarState } from "react-stately";
import { useCalendar, useCalendarGrid } from "@react-aria/calendar";
import { useFocusRing } from "@react-aria/focus";
import { useLocale, useDateFormatter } from "@react-aria/i18n";
import { createCalendar } from "@internationalized/date";
import { mergeProps } from "@react-aria/utils";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useButton } from "@react-aria/button";

const StyledButton = styled.button`
  appearance: none;
  border: none;
  background: none;
  color: black;
  height: 20px;
  width: fit-content;
  border-radius: 10px;
  padding: 4px 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  box-shadow: ${(props) => (props.isFocusVisible ? "0 0 0 2px seagreen" : "")};

  &:hover {
    background: #888;
  }

  &:active {
    background: #222;
  }
`;

export function Button(props) {
  let ref = useRef();
  let { buttonProps } = useButton(props, ref);
  let { focusProps, isFocusVisible } = useFocusRing();
  return (
    <StyledButton
      {...mergeProps(buttonProps, focusProps)}
      isFocusVisible={isFocusVisible}
      ref={ref}
    >
      {props.children}
    </StyledButton>
  );
}

export function CalendarCell(props) {
  let ref = useRef();

  let dateFormatter = useDateFormatter({
    weekday: "short",
    day: "numeric",
    timeZone: props.state.timeZone,
    calendar: props.date.calendar.identifier,
  });

  let { focusProps, isFocusVisible } = useFocusRing();
  let isSelected = props.state.isSelected(props.date);

  let showTicker =
    new Date(props.date.toDate(props.date.timeZone)).toDateString() ===
    new Date().toDateString();

  return (
    <div className="column relative flex col">
      <Button ref={ref} isSelected={isSelected} isFocusVisible={isFocusVisible}>
        {dateFormatter
          .format(props.date.toDate(props.state.timeZone))
          .toUpperCase()}
      </Button>
    </div>
  );
}

import React, { useEffect, useMemo, useState } from "react";
import { CgChevronLeft } from "react-icons/cg";
// Import or define your styling

export const TimeTracker = ({ totalHours = 24 }) => {
  const [percentage, setPercentage] = useState(0);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const updatePercentage = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const totalMinutes = hours * 60 + minutes;
      const percentageCompleted = (totalMinutes / (totalHours * 60)) * 100;

      setPercentage(percentageCompleted);
    };

    // Update the percentage initially and every minute
    updatePercentage();
    let timer = setInterval(updatePercentage, 60000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const memoizedComponent = useMemo(
    () => (
      <div
        className="time-tracker"
        aria-hidden={true}
        onMouseDown={(e) => e.stopPropagation()}
        style={{ top: percentage + "%", marginTop: "40px" }}
      >
        <div className="timer">{formattedTime}</div>
        <div aria-hidden={true} className="ball" />
        <div aria-hidden={true} className="ball-line" />
      </div>
    ),
    [percentage]
  );

  return memoizedComponent;
};

const VerticalGrid = () => {
  // Create an array of time slots from 9 to 24 hours with half-hour intervals
  const timeSlots = Array.from({ length: 30 }, (_, index) => 9 + index * 0.5);

  return (
    <div className="vertical-grid-container">
      <TimeTracker />
      {timeSlots.map((time, index) => (
        <div key={index} className="grid-item">
          {time % 1 === 0 ? (
            <>
              <div className="hour-marker">
                {time > 12 ? time - 12 : time}:00 {time >= 12 ? "PM" : "AM"}
              </div>
              <div className="ticker"></div>
            </>
          ) : (
            <>
              {/* Uncomment if needed */}
              {/* <div className="ticker"></div>
              <div className="half-hour-marker">
                30
              </div> */}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default VerticalGrid;

const StyledWeekView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(100vw - 200px);
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
`;

export function WeekView(props) {
  let { locale } = useLocale();
  let state = useCalendarState({
    ...props,
    visibleDuration: { weeks: 1 },
    locale,
    createCalendar,
  });
  let ref = useRef();
  let { calendarProps, prevButtonProps, nextButtonProps } = useCalendar(
    props,
    state,
    ref
  );
  let { gridProps } = useCalendarGrid(props, state);

  let startDate = state.visibleRange.start;

  let dateFormatter = useDateFormatter({
    dateStyle: "long",
    calendar: startDate.calendar.identifier,
  });

  console.log("gridprops", gridProps);

  return (
    <StyledWeekView {...calendarProps} ref={ref}>
      <div className="header">
        <div className="flex center">
          <Button {...prevButtonProps}>
            <CgChevronLeft style={{ width: 20, height: 20 }} />
          </Button>

          <Title>
            {dateFormatter.formatRange(
              state.visibleRange.start.toDate(state.timeZone),
              state.visibleRange.end.toDate(state.timeZone)
            )}
          </Title>
          <Button {...nextButtonProps}>
            <FaChevronRight style={{ width: 20, height: 20 }} />
          </Button>
          <Button>Today</Button>
        </div>
      </div>

      <VerticalGrid />
    </StyledWeekView>
  );
}
