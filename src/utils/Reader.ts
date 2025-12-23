export async function readDatFile(file: File): Promise<ArrayBuffer> {
  return await file.arrayBuffer()
}

// const handleUpload = async (heaFile: File, datFile: File) => {
//   const heaText = await heaFile.text()
//   const heaInfo = parseHea(heaText)

//   const datBuffer = await datFile.arrayBuffer()
//   const signal = parseDat(datBuffer, heaInfo)

//   setEcgSignal({
//     samplingRate: heaInfo.fs,
//     value: signal
//   })
// }
