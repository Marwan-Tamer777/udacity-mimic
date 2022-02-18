export const RECEIVE_CONCEPTS = "RECEIVE_CONCEPTS"

export function receiveConcepts (concepts) {
  return {
    type: RECEIVE_CONCEPTS,
    concepts,
  }
}