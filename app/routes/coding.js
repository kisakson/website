import Route from '@ember/routing/route';

export default Route.extend({
  
  model() {
    return {
      entries: [
        {
          body: 'uhhh I am an SE now',
          title: 'Software Engineer (Video) at Alarm.com',
          url: ''
        },
        {
          body: 'uhhh I was an intern once',
          title: 'Software Developer Intern at Vistaprint Digital',
          url: ''
        },
        {
          body: 'uhhhh check this database application I made once',
          title: 'DAGR Database Application',
          url: ''
        }
      ]
    };
  }

});
