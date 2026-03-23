import React, { useRef, useEffect } from "react";

const GridBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Resize canvas
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const GRID_SIZE = 55;
    const DOT_RADIUS = 5;
    const CROSS_SIZE = 50;
    const ACTIVATION_RADIUS = 100;
    const PULL_STRENGTH = 0.2;

    let mouse = { x: -9999, y: -9999 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    class Node {
      constructor(x, y) {
        this.baseX = x;
        this.baseY = y;
        this.x = x;
        this.y = y;
        this.active = false;
      }

      update() {
        const dx = mouse.x - this.baseX;
        const dy = mouse.y - this.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        this.active = dist < ACTIVATION_RADIUS;

        if (this.active) {
          const pullX = dx * PULL_STRENGTH;
          const pullY = dy * PULL_STRENGTH;

          this.x = this.baseX + Math.max(-10, Math.min(10, pullX));
          this.y = this.baseY + Math.max(-10, Math.min(10, pullY));
        } else {
          this.x += (this.baseX - this.x) * 0.1;
          this.y += (this.baseY - this.y) * 0.1;
        }
      }

      draw() {
        ctx.strokeStyle = "rgba(73,140,235,0.4)";
        ctx.lineWidth = 1.2;

        // "+"
        ctx.beginPath();
        ctx.moveTo(this.x - CROSS_SIZE / 2, this.y);
        ctx.lineTo(this.x + CROSS_SIZE / 2, this.y);
        ctx.moveTo(this.x, this.y - CROSS_SIZE / 2);
        ctx.lineTo(this.x, this.y + CROSS_SIZE / 2);
        ctx.stroke();

        // dot
        ctx.beginPath();
        ctx.arc(this.x, this.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = this.active
          ? "rgba(83,180,255,1)"
          : "lightblue";
        ctx.fill();
      }
    }
    let nodes = [];

    const buildGrid = () => {
      nodes = [];
      for (let y = GRID_SIZE; y < canvas.height; y += GRID_SIZE) {
        for (let x = GRID_SIZE; x < canvas.width; x += GRID_SIZE) {
          nodes.push(new Node(x, y));
        }
      }
    };

    buildGrid();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.floor(canvas.width / GRID_SIZE);

      nodes.forEach((n) => n.update());

      ctx.strokeStyle = "rgba(73,140,235,0.4)";
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const col = i % cols;

        if (!node.active) continue;

        // right neighbor
        if (col < cols - 1) {
          const right = nodes[i + 1];
          if (right.active) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(right.x, right.y);
            ctx.stroke();
          }
        }

        // bottom neighbor
        const bottomIndex = i + cols;
        if (bottomIndex < nodes.length) {
          const bottom = nodes[bottomIndex];
          if (bottom.active) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(bottom.x, bottom.y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => n.draw());

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        background: "#050816",
      }}
    />
  );
};

export default GridBackground;