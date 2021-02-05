class autoPause {
   constructor() {
      this.threshold = 0.25;
      this.handleIntersection = this.handleIntersection.bind(this);
      this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
   }

   run(player) {
      this.player = player;
      const observer = new IntersectionObserver(this.handleIntersection, {
         threshold: this.threshold,
      });

      observer.observe(this.player.media);

      document.addEventListener("visibilitychange", this.handleVisibilityChange);
   }

   handleIntersection(entires) {
      const entry = entires[0];

      entry.intersectionRatio >= this.threshold? this.player.play() : this.player.pause();
   }

   handleVisibilityChange() {
      document.visibilityState === "visible"? this.player.play() : this.player.pause();
   }
}

export default autoPause;