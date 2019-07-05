var store = store || {};

(function(_) {


  _.load = function(name) {
    let storedData = JSON.parse(window.localStorage.getItem(name));

    return storedData;
  }



  _.loadAgents = function() {
    let stored_agents = this.load("agents");
    agents = [];

    for (let i = 0; i < stored_agents.length; i++) {
      let ag = new Agent(i);
      ag.mov = stored_agents[i].mov;
      ag.size = stored_agents[i].size;
      ag.view = stored_agents[i].view;
      // ag.position = stored_agents[i].position;
      ag.color = color(stored_agents[i].color);
      //ag.node_count = stored_agents[i].node_count;
      ag.node_count = stored_agents[i].nodes.length;
      ag.nodes = [];
      for (let j = 0; j < ag.node_count; j++) {
        ag.nodes[j] = createVector(stored_agents[i].nodes[j].x, stored_agents[i].nodes[j].y);
      }
      //agents[i].edge_count = stored_agents[i].edge_count
      ag.edges = stored_agents[i].edges;
      ag.initNodes();

      agents.push(ag);
    }
  }



  _.save = function(name, obj) {
    window.localStorage.setItem(name, JSON.stringify(obj));
  }

  _.nodes2array = function(nodes) {

    let array = [];
    for (let n of nodes) {
      let node = {};
      node.x = n.x;
      node.y = n.y;

      array.push(node);
    }
    return array;
  }



  _.saveAgents = function() {

    print('saveAgents()');
    var tmp_ag_arr = [];

    for (let i = 0; i < agents.length; i++) {
      let tmp_ag = {};
      tmp_ag.mov = agents[i].mov;
      tmp_ag.size = agents[i].size;
      tmp_ag.view = agents[i].view;
      // tmp_ag.position = agents[i].position;
      tmp_ag.color = agents[i].color.toString();
      tmp_ag.node_count = agents[i].node_count;
      tmp_ag.nodes = this.nodes2array(agents[i].nodes);
      //tmp_ag.edge_count = agents[i].edge_count;
      tmp_ag.edges = agents[i].edges;

      tmp_ag_arr.push(tmp_ag);
    }

    this.save("agents", tmp_ag_arr);
  }

})(store);
