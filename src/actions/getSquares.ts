import { auth } from "@/actions/auth";
import { Square } from "@/models/Square";

export async function getSquares(): Promise<Square[]> {
  const { teamId } = await auth();

  if (!teamId) {
    throw new Error("Team ID is required");
  }

  return [
    {
      complete: false,
      points: 1,
      activity: {
        id: "test",
        name: "test",
        description: "test",
        x: 0,
        y: 0,
      },
    },
    {
      complete: false,
      points: 2,
      activity: {
        id: "test",
        name: "test",
        description: "test",
        x: 0,
        y: 1,
      },
    },
    {
      complete: false,
      points: 3,
      activity: {
        id: "test",
        name: "test",
        description: "test",
        x: 0,
        y: 2,
      },
    },
    {
      complete: false,
      points: 4,
      activity: {
        id: "test",
        name: "test",
        description: "test",
        x: 0,
        y: 3,
      },
    },
    {
      complete: false,
      points: 2,
      activity: {
        id: "test",
        name: "test",
        description: "test",
        x: 1,
        y: 0,
      },
    },
    {
      complete: false,
      points: 3,
      activity: {
        id: "test",
        name: "test",
        description: "test",
        x: 1,
        y: 1,
      },
    },
    {
      complete: false,
      points: 4,
      activity: {
        id: "test",
        name: "test",
        description: "test",
        x: 1,
        y: 2,
      },
    },
    {
      complete: false,
      points: 1,
      activity: {
        id: "test",
        name: "test",
        description: "test",
        x: 1,
        y: 3,
      },
    },
    {
      complete: false,
      points: 3,
      activity: {
        id: "test",
        name: "test",
        description: "test",
        x: 2,
        y: 0,
      },
    },
    {
      complete: false,
      points: 4,
      activity: {
        id: "test",
        name: "test",
        description: "test",
        x: 2,
        y: 1,
      },
    },
    {
      complete: false,
      points: 1,
      activity: {
        id: "test",
        name: "test",
        description: "test",
        x: 2,
        y: 2,
      },
    },
    {
      complete: false,
      points: 2,
      activity: {
        id: "test",
        name: "test",
        description: "test",
        x: 2,
        y: 3,
      },
    },
    {
      complete: false,
      points: 4,
      activity: {
        id: "test",
        name: "test",
        description: "test",
        x: 3,
        y: 0,
      },
    },
    {
      complete: false,
      points: 1,
      activity: {
        id: "test",
        name: "test",
        description: "test",
        x: 3,
        y: 1,
      },
    },
    {
      complete: false,
      points: 2,
      activity: {
        id: "test",
        name: "test",
        description: "test",
        x: 3,
        y: 2,
      },
    },
    {
      complete: false,
      points: 3,
      activity: {
        id: "test",
        name: "test",
        description: "test",
        x: 3,
        y: 3,
      },
    },
  ];
}
