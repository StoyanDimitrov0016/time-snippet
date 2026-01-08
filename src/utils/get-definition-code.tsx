import { type Language } from "@/constants";

export function getDefinitionCode(lang: Language) {
  switch (lang) {
    case "TypeScript":
      return getTsDefinition();
    case "Python":
      return getPyDefinition();
    case "Java":
      return getJavaDefinition();
    case "C#":
      return getCsDefinition();
    case "C++":
      return getCppDefinition();
    case "Go":
      return getGoDefinition();
    default: {
      return getTsDefinition();
    }
  }
}

function getTsDefinition() {
  return `export type Month = {
  num: number;
  name: string;
};

export type Day = {
  num: number;
  name: string;
};

export type Time = {
  year: number;
  month: Month;
  week: number;
  day: Day;
  hour: number;
  minute: number;
  second: number;
};`;
}

function getPyDefinition() {
  return `from dataclasses import dataclass
from typing import TypedDict

class Month(TypedDict):
    num: int
    name: str

class Day(TypedDict):
    num: int
    name: str

class Time(TypedDict):
    year: int
    month: Month
    week: int
    day: Day
    hour: int
    minute: int
    second: int
`;
}

function getJavaDefinition() {
  return `public final class Time {
  public final int year;
  public final Month month;
  public final int week;
  public final Day day;
  public final int hour;
  public final int minute;
  public final int second;

  public Time(
      int year,
      Month month,
      int week,
      Day day,
      int hour,
      int minute,
      int second
  ) {
    this.year = year;
    this.month = month;
    this.week = week;
    this.day = day;
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  public static final class Month {
    public final int num;
    public final String name;

    public Month(int num, String name) {
      this.num = num;
      this.name = name;
    }
  }

  public static final class Day {
    public final int num;
    public final String name;

    public Day(int num, String name) {
      this.num = num;
      this.name = name;
    }
  }
}`;
}

function getCsDefinition() {
  return `public record Time(
  int Year,
  Month Month,
  int Week,
  Day Day,
  int Hour,
  int Minute,
  int Second
);

public record Month(int Num, string Name);

public record Day(int Num, string Name);
`;
}

function getCppDefinition() {
  return `#include <string>

struct Month {
  int num;
  std::string name;
};

struct Day {
  int num;
  std::string name;
};

struct Time {
  int year;
  Month month;
  int week;
  Day day;
  int hour;
  int minute;
  int second;
};
`;
}

function getGoDefinition() {
  return `package main

type Month struct {
  Num  int    \`json:"num"\`
  Name string \`json:"name"\`
}

type Day struct {
  Num  int    \`json:"num"\`
  Name string \`json:"name"\`
}

type Time struct {
  Year   int   \`json:"year"\`
  Month  Month \`json:"month"\`
  Week   int   \`json:"week"\`
  Day    Day   \`json:"day"\`
  Hour   int   \`json:"hour"\`
  Minute int   \`json:"minute"\`
  Second int   \`json:"second"\`
}
`;
}
