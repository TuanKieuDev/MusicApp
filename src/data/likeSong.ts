export interface ISong {
    id: string;
    name: string;
    author: string;
    uri: string; //uri .mp4
    source: string; //image
  }
  
  const likeSongs: ISong[] = [
    {
      id: "0",
      name: "Boy mỹ con",
      author: " B-Ray ",
      uri: "https://drive.google.com/uc?export=download&id=1H46pwR2eBbDqgf2HwxK8qdsfZZv2EH_h",
      source: "https://i1.sndcdn.com/artworks-cS8xIMSaiXtu-0-t500x500.jpg",
    },
    {
      id: "1",
      name: "Con gái rượu",
      author: " B-Ray ",
      uri: "https://drive.google.com/uc?export=download&id=1aRsoHbNjbXQS7K5cQr3YezIqXluZgdps",
      source: "https://images.genius.com/b58e0094f0cfac1b54f36a9cf6d8c3f3.500x500x1.jpg",
    },
    {
      id: "2",
      name: "Do for love",
      author: " B-Ray ",
      uri: "https://drive.google.com/uc?export=download&id=12PcpvECA-jy38r7Pzo5YdRx4O3Cky7wB",
      source: "https://avatar-ex-swe.nixcdn.com/playlist/2020/02/13/4/1/3/6/1581612119736_500.jpg",
    },
    {
      id: "3",
      name: "Đừng tin her",
      author: " B-Ray ",
      uri: "https://drive.google.com/uc?export=download&id=10AKNozTLDoOnivvuu4Ow17nHIPj6LrqC",
      source: "https://i1.sndcdn.com/artworks-eDoMY0aH18qp-0-t500x500.jpg",
    },
    {
      id: "4",
      name: "Ex's hate me",
      author: " B-Ray ",
      uri: "https://drive.google.com/uc?export=download&id=1BSYZsB-34faxZHlp572HGmApoeqxbbRd",
      source: "https://i1.sndcdn.com/artworks-000498924885-d5ylks-t500x500.jpg",
    },
    {
      id: "5",
      name: "Hôm nay em lạ quá",
      author: " B-Ray ",
      uri: "https://drive.google.com/uc?export=download&id=1w6YgBWp0LbnpzZSQ0FyBErT72aCQDLwH",
      source: "https://data.chiasenhac.com/data/cover/140/139552.jpg",
    },
  ];
  
  export default likeSongs;