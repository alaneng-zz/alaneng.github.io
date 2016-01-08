import React, { Component } from 'react';
import { Grid, Panel } from 'react-bootstrap';

module.exports = React.createClass({
  render() {
    return (
      <Grid fluid className='section'>
        <h2 className='text-center'>Who We Are</h2>
        <ul>
          <li>Specialists with over twenty-five years combined experience in clinical and educational settings</li>
          <li>Experience teaching a broad range of ages from pre-kindergarten to adult</li>
          <li>Experience with learning differences, learning disabilities, dyslexia, central auditory processing disorders (CAPD), ADD, ADHD, cognitive and neurological disorders, Pervasive Developmental Disorders (PDD), including Autism and Asperger’s Syndrome.</li>
          <li>Highly trained in dyslexia teaching methods.</li>
          <li>Members of the International Dyslexia Association, Association of Educational Therapists, Parents Education Network and the Neighborhoods West of Twin Peaks Community Convener Group</li>
        </ul>
      </Grid>
    )
  }
})

