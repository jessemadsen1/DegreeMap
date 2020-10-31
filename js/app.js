//vue2 templates

//Template to place scheduled classes in Semesters, Sorted on screen by Semester
Vue.component('semester', {

  props: ['course','semester_name'],
  template: `    
  <section v-if = "course.SEMESTER === semester_name && course.COMPLETED == true">
  <h6>{{course.CRS}} {{course.TITLE}}</h6>
</section>`,
});


//Template to choose class, select grade and scheduled the class in a Semester
Vue.component('classes_degree', {

  props: ['course','name',],
  template: `            
  <section v-if = "course.SUBJ === name && course.EMPHASIS == null">
  <input  type="checkbox" id="course.CRS" value="true" v-model="course.COMPLETED" >
  <label for="course.CRS"> {{course.CRS}} {{course.TITLE}} </label>
  <section v-if = "course.COMPLETED == true" >
    <select  v-model="course.GRADE">
      <option :value = "null" disabled selected>Select your Grade</option>
      <option>Schedule it</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
      <option>Currently Taking</option>
      </select>            
    <section v-if = "course.GRADE === 'Schedule it'">
      <select  v-model="course.SEMESTER">
        <option :value = "null" disabled selected>Choose Semester</option>
        <option>First Semester</option>
        <option>Second Semester</option>
        <option>Third Semester</option>
        <option>Fourth Semester</option>
        <option>Fifth Semester</option>
        <option>Sixth Semester</option>
        <option>Seventh Semester</option>
        <option>Eighth Semester</option>
        <option>Ninth Semester</option>
        </select>
      </section>  
    </section>
  <br> 
  </section>   `,
});

//Template to choose class(emphasis or electives), select grade and scheduled the class in a Semester
Vue.component('classes_emphasis', {

  props: ['course','name', 'enumber'],
  template: `            
  <section v-if = "course.EMPHASIS == enumber ">
  <input  type="checkbox" id="course.CRS" value="true" v-model="course.COMPLETED" >
  <label for="course.CRS"> {{course.CRS}} {{course.TITLE}} </label>
  <section v-if = "course.COMPLETED == true" >
    <select  v-model="course.GRADE">
      <option :value = "null" disabled selected>Select your Grade</option>
      <option>Schedule it</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
      <option>Currently Taking</option>
      </select>            
    <section v-if = "course.GRADE === 'Schedule it'">
      <select  v-model="course.SEMESTER">
        <option :value = "null" disabled selected>Choose Semester</option>
        <option>First Semester</option>
        <option>Second Semester</option>
        <option>Third Semester</option>
        <option>Fourth Semester</option>
        <option>Fifth Semester</option> 
        <option>Sixth Semester</option>
        <option>Seventh Semester</option>
        <option>Eighth Semester</option>
        <option>Ninth Semester</option>
        </select>
      </section>  
    </section>
  <br> 
  </section>    
  </template>
</section>`,
});



