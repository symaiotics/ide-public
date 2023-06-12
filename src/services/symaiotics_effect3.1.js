
			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
			var geometry = new THREE.BufferGeometry();
			var geometry2;// = new THREE.BufferGeometry();
			var container;
			var material;
			var camera, scene, renderer;
			var origTime = Date.now()
			var points;
			var mesh;
			var mesh2;

$(document).ready(function() {

			init();
			animate();

			});
			
			function init() {

			
			document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.which || evt.keyCode;
    var charStr = String.fromCharCode(charCode);
    if (charStr == "/") {
        multiplier = multiplier /2 ;
    }
    if (charStr == "*") {
        multiplier = multiplier *2;
    }

    if (charStr == "+") {
        year = year + .1 ;
	//	multiplier = 1/(year*10);
    }
    if (charStr == "-") {
      year = year - .1 ;
	//	multiplier = 1/(year*10);
    }

	console.log("Multiplier:" + multiplier);
	console.log("Year:"  + year);
};
			
				container = document.getElementById( 'syma_container' );

				camera = new THREE.PerspectiveCamera( 27, window.innerWidth / window.innerHeight, 2000, 20000 );
				camera.position.z = 4750;
				camera.position.y = -80;
				camera.position.x = 290;

				scene = new THREE.Scene();
				scene.fog = new THREE.Fog( 0x113539, 1000, 5700 );

				
							scene.add( new THREE.AmbientLight( 0xff4444 ,5.1) );
						//	scene.add( new THREE.AmbientLight( 0xff0000 ,215.1) );

				var light1 = new THREE.DirectionalLight( 0xff0000, 1.5 );
				light1.position.set( 1, 1, -1 );
				scene.add( light1 );

				
				
				/*

/*
				var light3 = new THREE.DirectionalLight( 0xff0000, 28.5 );
				light3.position.set( -1, 1, 0 );
				scene.add( light3 );
	*/			
				//
				var time = Date.now();
					var thisTime = (time-origTime)*1;
					thisTime += 1000000;
				updatePoints(thisTime);
				updateLines(thisTime);
				scene.add( mesh );
				scene.add( mesh2 );

				//

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setClearColor( scene.fog.color );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );

				container.appendChild( renderer.domElement );

				//

				//stats = new Stats();
				//container.appendChild( stats.dom );

				//

				window.addEventListener( 'resize', onWindowResize, false );

				/*
				setInterval(
				function()
				{
					
					var time = Date.now();
					var thisTime = (time-origTime)*1;
					thisTime += 1000000;
				
					scene.remove(mesh);
					scene.remove(mesh2);
					geometry.dispose();
					material.dispose();
					updatePoints(thisTime);
					updateLines(thisTime);
					scene.add(mesh);
					scene.add(mesh2);
				}
				,25
				)*/
			}

			function updatePoints(thisTime)
			{
				var triangles = 2000;

				

				var positions = new Float32Array( triangles * 3 * 3 );
				var normals = new Float32Array( triangles * 3 * 3 );
				var colors = new Float32Array( triangles * 3 * 3 );

				var color = new THREE.Color();

				var n = 700, n2 = n/2;	// triangles spread in the cube
				var d = 200, d2 = d/2;	// individual triangle size

				var pA = new THREE.Vector3();
				var pB = new THREE.Vector3();
				var pC = new THREE.Vector3();

				var cb = new THREE.Vector3();
				var ab = new THREE.Vector3();

	
				
				
//console.log(time);
				for ( var i = 0; i < positions.length; i += 9 ) {

					// positions
/*
					var x = Math.cos(i^time) * n - n2;
					var y = Math.sin(i^time) * n^time/20 - n2;
					var z = Math.sin(i^-.20*time) * n^time - n2;
*/
					var x = Math.cos(i*thisTime/10000000000*thisTime/5000) * n  - n2;
					var y = Math.sin(i*thisTime/1000000000) * n - n2;
					var z = (Math.tan(i*thisTime/1000000000) * n  - n2);

					var ax = (x + .1 * d - d2) + i/500;
					var ay = (y + .5 * d - d2) + i/500;
					var az = (z + .1 * d - d2) + Math.random()*0;

					var bx = (x + .1 * d - d2) + Math.random()*0;
					var by = (y + .1 * d - d2) + Math.random()*0;
					var bz = (z + .5 * d - d2) + Math.random()*0;

					var cx = (x + .1 * d - d2) + i/500;
					var cy = (y + .5 * d - d2) + i/500;
					var cz = (z + .5 * d - d2) + 0;

					positions[ i ]     = ax;
					positions[ i + 1 ] = ay;
					positions[ i + 2 ] = az;

					positions[ i + 3 ] = bx;
					positions[ i + 4 ] = by;
					positions[ i + 5 ] = bz;

					positions[ i + 6 ] = cx;
					positions[ i + 7 ] = cy;
					positions[ i + 8 ] = cz;

					
					// flat face normals

					pA.set( ax, ay, az );
					pB.set( bx, by, bz );
					pC.set( cx, cy, cz );

					cb.subVectors( pC, pB );
					ab.subVectors( pA, pB );
					cb.cross( ab );

					cb.normalize();

					var nx = cb.x;
					var ny = cb.y;
					var nz = cb.z;

					normals[ i ]     = nx;
					normals[ i + 1 ] = ny;
					normals[ i + 2 ] = nz;

					normals[ i + 3 ] = nx;
					normals[ i + 4 ] = ny;
					normals[ i + 5 ] = nz;

					normals[ i + 6 ] = nx;
					normals[ i + 7 ] = ny;
					normals[ i + 8 ] = nz;

					// colors

					var vx = ( x / n ) + 0.5;
					var vy = ( y / n ) + 0.5;
					var vz = ( z / n ) + 0.5;

					color.setRGB( vx, vy, vz );

					colors[ i ]     = color.r;
					colors[ i + 1 ] = color.g;
					colors[ i + 2 ] = color.b;

					colors[ i + 3 ] = color.r;
					colors[ i + 4 ] = color.g;
					colors[ i + 5 ] = color.b;

					colors[ i + 6 ] = color.r;
					colors[ i + 7 ] = color.g;
					colors[ i + 8 ] = color.b;

				}
				//geometry.dynamic = true;
				geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
				geometry.addAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
				geometry.addAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );

				geometry.computeBoundingSphere();

				 material = new THREE.MeshPhongMaterial( {
					color: 0xffffff, specular: 0xffffff, shininess: 250,
					side: THREE.DoubleSide,// vertexColors: THREE.VertexColors,
					transparent: true,
					opacity: 1,
					depthFunc: THREE.LessDepth
				} );
				
				
				/*
				material = new THREE.MeshBasicMaterial({
					color: 0x00ff00,
					side: THREE.DoubleSide,
					transparent: true,
					opacity: 0.2,
					depthFunc: THREE.LessDepth
				});
*/
				mesh = new THREE.Mesh( geometry, material );		
//				console.log('mesh');
			}
			
			
			function updateLines(thisTime)
			
			{

				var segments = 1000;
				geometry2 = new THREE.BufferGeometry();
				var material = new THREE.LineBasicMaterial({ color:0xffaaaa, transparent: true,
					opacity: .353, });
				var positions = new Float32Array( segments * 3 );
				var colors = new Float32Array( segments * 3 );
				var n = 700, n2 = n/2;	// triangles spread in the cube
				var d = 200, d2 = d/2;	// individual triangle size
				var r = 800;
				for ( var i = 0; i < segments; i ++ ) {
/*					var x = Math.random() * r - r / 2;
					var y = Math.random() * r - r / 2;
					var z = Math.random() * r - r / 2;
*/
					var x = Math.cos(i*2*thisTime/10000000000*thisTime/5000) * n - n2;
					var y = Math.sin(i*thisTime/1000000000) * n - n2;
					var z = Math.tan(i*thisTime/1000000000) * n - n2;


					// positions
					positions[ i * 3 ] = x;
					positions[ i * 3 + 1 ] = y;
					positions[ i * 3 + 2 ] = z;
					// colors
					colors[ i * 3 ] = ( x / r ) + 0.5;
					colors[ i * 3 + 1 ] = ( y / r ) + 0.5;
					colors[ i * 3 + 2 ] = ( z / r ) + 0.5;
				}
				geometry2.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
				geometry2.addAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );
				geometry2.computeBoundingSphere();
				mesh2 = new THREE.Line( geometry2, material );				
			}
			
			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			//

			function animate() {

				requestAnimationFrame( animate );

				render();
			//	stats.update();

			}
			var multiplier = .001;//2.5;
			var year = 11.4; //498.07;//499.17; //498.1
			var timeBreak;
			var timeOffset = 31536000*year;//3600000*365*100;
			//multiplier = 1/(year*10);
			function render() {
					timeOffset = 31536000*year;//3600000*365*100;
					var time = Date.now();
					//currentMultiplier = multiplier - ((time-origTime) / 1000);// / ((time-origTime));
					
					

					currentMultiplier = multiplier;
					//if(currentMultiplier < -5){origTime = time;} //reset when it gets to the other end
					//timebreak = (1-((time-origTime)/3600000));
					//if(timebreak <= -1){origTime = time;}//reset the timer once things reverse
					var thisTime = timeOffset + (time-origTime)*currentMultiplier; //;(multiplier*(Math.abs(Math.sin(((time-origTime)/100000)))+.5));
					//console.log(currentMultiplier);
//					thisTime += 100000; //over an hour, the headstart will disappear
					var n = 700, n2 = n/2;	// triangles spread in the cube
					var d = 200, d2 = d/2;	// individual triangle size

					for ( var i = 0, l = geometry.attributes.position.count*3; i < l; i=i+9 ) {

/* ORIGINAL AICO DO NOT LOSE
						var x = Math.cos(i*thisTime/10000000000*thisTime/5000) * n  - n2;
						var y = Math.sin(i*thisTime/1000000000) * n - n2;
						var z = Math.tan(i*thisTime/1000000000) * n - n2;
*/

						var x = Math.cos((i*thisTime^2)/100000000) * n*(Math.cos(i)*10)  - n2;
						var y =  Math.sin((i*thisTime^2)/100000000) * n*(Math.cos(i)*10) - n2;
						var z = Math.tan((i*thisTime^(origTime / time))/1000000) * n - n2;
x=x/10;
y=y/10;
z=z/10;

var offset = -97;

						var ax = (x + .01 * d - d2)-offset;// + i/2500;
						var ay = (y + .05 * d - d2)-offset;;// + i/2500;
						var az = (z + .01 * d - d2)-offset;;// + Math.random()*0;

						var bx = (x + .01 * d - d2)-offset;;// + Math.random()*0;
						var by = (y + .01 * d - d2)-offset;;// + Math.random()*0;
						var bz = (z + .05 * d - d2)-offset;;// + Math.random()*0;

						var cx = (x + .01 * d - d2)-offset;;// + i/250;
						var cy = (y + .05 * d - d2)-offset;;// + i/250;
						var cz = (z + .05 * d - d2)-offset;;// + 0;
						
						geometry.attributes.position.array[i] = ax;
						geometry.attributes.position.array[i+1] = ay;
						geometry.attributes.position.array[i+2] = az;

						geometry.attributes.position.array[i+3] = bx;
						geometry.attributes.position.array[i+4] = by;
						geometry.attributes.position.array[i+5] = bz;

						geometry.attributes.position.array[i+6] = cx;
						geometry.attributes.position.array[i+7] = cy;
						geometry.attributes.position.array[i+8] = cz;
				}
				geometry.attributes.position.needsUpdate = true;	
					
				for ( var i = 0; i < 2000; i++) {
/*
					var x = Math.cos(i*thisTime/10000000000*thisTime/5000) * n  - n2;
					var y = Math.sin(i*thisTime/1000000000) * n - n2;
					var z = Math.tan(i*thisTime/1000000000) * n - n2;
	*/

						var x = Math.cos((i*thisTime^2)/100000000) * n*(Math.cos(i)*10)  - n2;
						var y =  Math.sin((i*thisTime^2)/100000000) * n*(Math.cos(i)*10) - n2;
						var z = Math.tan((i*thisTime^(origTime / time))/1000000) * n - n2;
x=x/10;
y=y/10;
z=z/40;
	
					// positions
					geometry2.attributes.position.array[ i * 3 ] = x;
					geometry2.attributes.position.array[ i * 3 + 1 ] = y;
					geometry2.attributes.position.array[ i * 3 + 2 ] = z;				
				
				}				
				geometry2.attributes.position.needsUpdate = true;	
					
				time = Date.now() * 0.001;
				
				//mesh.rotation.y = 3.14159/4;
				//mesh2.rotation.y = 3.14159/4;
				mesh.rotation.z = time * 0.1;
				mesh2.rotation.z = time * 0.1;
				
				mesh.rotation.x = time * 0.025;
				mesh2.rotation.x = time * 0.025;
				mesh.rotation.y = time * 0.05;
				mesh2.rotation.y = time * 0.05;

				renderer.render( scene, camera );

			}

