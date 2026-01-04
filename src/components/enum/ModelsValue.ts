export const ModelSelectionValue = {
  KNN: "knn",
  SVM: "svm",
  LSTM: "lstm",
  CNN: "cnn",
  MLP: "mlp",
  CNN_GRU: "hybrid",
  TCN: "tcn"
} as const

export type ModelSelectionValue =
  typeof ModelSelectionValue[keyof typeof ModelSelectionValue]

