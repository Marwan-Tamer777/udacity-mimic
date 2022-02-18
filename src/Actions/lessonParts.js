export const RECEIVE_LESSONS_PARTS = "RECEIVE_LESSONS_PARTS"

export function receiveLessonParts (lessonParts) {
  return {
    type: RECEIVE_LESSONS_PARTS,
    lessonParts,
  }
}