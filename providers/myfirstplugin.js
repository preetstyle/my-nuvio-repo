function getStreams(tmdbId, mediaType, season, episode) {
    return new Promise((resolve) => {
        // This will always return a working 1080p test video for any movie you click!
        resolve([{
            name: "Preet's Plugin",
            title: "Test Video (It Works!)",
            url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            quality: "1080p"
        }]);
    });
}

module.exports = { getStreams };
