import type { Language } from "@/utils/get-project";

const TYPESCRIPT_DEFINITION = `export type Month = {
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

const PYTHON_DEFINITION = `from typing import TypedDict

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

const JAVA_DEFINITION = `public final class Time {
  public final int year;
  public final Month month;
  public final int week;
  public final Day day;
  public final int hour;
  public final int minute;
  public final int second;

  public Time(int year, Month month, int week, Day day, int hour, int minute, int second) {
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
    public Month(int num, String name) { this.num = num; this.name = name; }
  }

  public static final class Day {
    public final int num;
    public final String name;
    public Day(int num, String name) { this.num = num; this.name = name; }
  }
}`;

const C_SHARP_DEFINITION = `public record Time(
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

const C_PLUS_PLUS_DEFINITION = `#pragma once
#include <string>

struct Month { int num; std::string name; };
struct Day   { int num; std::string name; };

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

const GO_LANG_DEFINITION = `package main

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

export const DEFINITIONS: Record<Language, string> = {
  TypeScript: TYPESCRIPT_DEFINITION,
  Python: PYTHON_DEFINITION,
  Java: JAVA_DEFINITION,
  "C#": C_SHARP_DEFINITION,
  "C++": C_PLUS_PLUS_DEFINITION,
  Go: GO_LANG_DEFINITION,
} as const;
