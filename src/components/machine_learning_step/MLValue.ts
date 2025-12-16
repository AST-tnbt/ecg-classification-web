export const MLSelectionValue = {
  KNN: "knn",
  SVM: "svm",
  RF: "rf",
} as const

export type MLSelectionValue =
  typeof MLSelectionValue[keyof typeof MLSelectionValue]

