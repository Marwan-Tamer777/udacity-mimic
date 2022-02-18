export const RECEIVE_LESSONS = "RECEIVE_LESSONS"

export function receiveLessons (lessons) {
  return {
    type: RECEIVE_LESSONS,
    lessons,
  }
}