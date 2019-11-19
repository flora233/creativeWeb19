    /* Costomized functions */
    //Cannons
    class Ball{
        constructor(){
          let material = new THREE.MeshPhongMaterial({
            color: Math.random*0xffffff,
            side: THREE.DoubleSide,
            shininess:100
  
          });
          let geometry = new THREE.SphereGeometry(1,12,12);
          let ball = new THREE.Mesh(geometry,material);
          ball.position.x = camera.position.x;
          ball.position.y = camera.position.y;
          ball.position.z = camera.position.z;
          this.object = ball;
          this.direction = new THREE.Vector3(0,0,0);
          camera.getWorldDirection(this.direction );
          scene.add(ball);
          this.t = 100;
          this.isAlive = true;
        }
        //behavior
        move(){
          this.object.position.x += this.direction.x*2;
          this.object.position.y += this.direction.y+0.25;
          this.direction.y-=.01;
          this.object.position.z += this.direction.z*2;
          if(this.object.position.y<.5)this.object.position.y=.5;
          if((this.object.position).distanceTo(sun.position)<20){
            sunlight.intensity=0;
            scene.remove(sun,sunlight);
            theta+=randomInRange(3*Math.PI/4,3*Math.PI/2);
            // delete sunlight;
            sunKills++;
            createSun();
  
          }
          boxes.forEach(box=>{
            if((this.object.position).distanceTo(box.object.position)<3){
              scene.remove(this.object);
              box.remove();
            }
          });
          this.t-=1;
          //removal after 200 animation frames
          if(this.t<0){
            scene.remove(this.object);
            balls = balls.slice(1,balls.length);
          }
        }
      }

      