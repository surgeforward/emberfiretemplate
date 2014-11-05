import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  tasks: DS.hasMany('tasks', {async:true}),
  members: DS.attr(),

  addMember:function(user, role){
    var members = this.get('members');
    if(!members){
        members = {};
    }

    members[user.id] = {role: role};

    this.set('members', members);
  },

  getRole: function (user) {
      var member = this.get('members')[user.get('id')];
      if(member) return member.role;
      return null;
  }
});
