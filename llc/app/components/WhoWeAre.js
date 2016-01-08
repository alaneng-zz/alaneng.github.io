import React, { Component } from 'react';
import { Grid, Panel, Col, Row } from 'react-bootstrap';

export default class WhoWeAre extends React.Component {
  render() {
    return (
      <Grid fluid className='bodySection'>
        <h2 className='text-center'>Who We Are</h2>
        <Col xs={6}>
        <ul>
          <li>Specialists with over twenty-five years combined experience in clinical and educational settings</li>
          <li>Experience teaching a broad range of ages from pre-kindergarten to adult</li>
          <li>Experience with learning differences, learning disabilities, dyslexia, central auditory processing disorders (CAPD), ADD, ADHD, cognitive and neurological disorders, Pervasive Developmental Disorders (PDD), including Autism and Asperger’s Syndrome.</li>
        </ul>
        </Col>
        <Col xs={6}>
          <ul>
          <li>Highly trained in dyslexia teaching methods.</li>
          <li>Members of the International Dyslexia Association, Association of Educational Therapists, Parents Education Network and the Neighborhoods West of Twin Peaks Community Convener Group</li>
          </ul>
        </Col>
      </Grid>
    )
  }
}