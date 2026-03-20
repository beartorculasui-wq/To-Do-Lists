self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("To-Do-lists-cache").then(function(cache) {
      return cache.addAll(["index.html"]);
    })
  );
});
