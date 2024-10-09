const typeDefs = `#graphql
  scalar ObjectId
  scalar ISODate
  
  type Date {
    date: String
  }
  
  type File {
    path: String
    name: String
    size: Int
    creationDate: Date
    modifiedDate: Date
  }
  
  type Resolution {
    width: Int
    height: Int
  }
  
  type Video {
    codec: String
    resolution: Resolution
    formatName: String
    duration: Float
    bitrate: Int
    frameRate: Int
    numberOfStreams: Int
    pixelFormat: String
  }
  
  type Audio {
    codec: String
  }
  
  type Movie {
    _id: ObjectId
    file: File
    video: Video
    audio: Audio
    processingDate: Date
  }
  
  type Query {
    movies: [Movie]
  }
`;

export default typeDefs;