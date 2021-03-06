/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.ParticleSystem = function ( geometry, material ) {

	THREE.Object3D.call( this );

	this.geometry = geometry;
	this.material = ( material !== undefined ) ? material : new THREE.ParticleBasicMaterial( { color: Math.random() * 0xffffff } );

	this.sortParticles = false;

	if ( this.geometry ) {

		// calc bound radius

		if( this.geometry.boundingSphere === null ) {

			this.geometry.computeBoundingSphere();

		}

		this.boundRadius = geometry.boundingSphere.radius;

	}

	this.frustumCulled = false;

};

THREE.ParticleSystem.prototype = Object.create( THREE.Object3D.prototype );

THREE.ParticleSystem.prototype.clone = function ( object ) {

	if ( object === undefined ) object = new THREE.ParticleSystem( this.geometry, this.material );
	object.sortParticles = this.sortParticles;

	THREE.Object3D.prototype.clone.call( this, object );

	return object;

};
