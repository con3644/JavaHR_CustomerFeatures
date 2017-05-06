//Written by Max Conroy for JavaHR on 5/6/2017

var customers = ["WIDGET CO", "SYNERGY INC", "ELEVATION EXECUTIVES", "MOMENTUM PARTNERS"]; //Initial customers
var group1 = []; //10% chance of getting group1 with Feature A and Feature B
var group2 = []; //20% chance of getting group2 with Feature B and Feature C
var group3 = []; //20% chance of getting group3 with Feature C
var group4 = []; //50% chance of getting group4 with Feature A, Feature C, and Feature D
var switcher = 0; //Used in hideSwitch function

function assignGroup() //Randomly assigns customers to 1 of 4 groups based on various percentages
{
  for (i = 0; i < customers.length; i++)
  {
    var rand = Math.random()*100; //set range for random number generator
    if (rand < 10) //if in the %10 chance for group 1, then add customer to group 1
    {
      group1.push(customers[i]);
    }
    else if (rand >= 10 && rand < 30)
    {
       group2.push(customers[i]);
    }
    else if (rand >= 30 && rand < 50)
    {
      group3.push(customers[i]);
    }
    else
    {
      group4.push(customers[i]);
    }
  }
  document.getElementById("result1").innerHTML = "Group 1: " + group1;
  document.getElementById("result2").innerHTML = "Group 2: " + group2;
  document.getElementById("result3").innerHTML = "Group 3: " + group3;
  document.getElementById("result4").innerHTML = "Group 4: " + group4;
  document.getElementById("groupButton").disabled = true;
  document.getElementById("afterAssign").style.display = 'block';
}

function checkAccess() //Checks if customer entered in cust textbox has access to the feature entered in feat textbox
{
    var cust = document.getElementById("cust").value.toUpperCase();
    var feat = document.getElementById("feat").value.toUpperCase();
    var g1 = group1.indexOf(cust);
    var g2 = group2.indexOf(cust);
    var g3 = group3.indexOf(cust);
    var g4 = group4.indexOf(cust);
    var custVal = customers.indexOf(cust);
    var featVal = ["A","B","C","D"].indexOf(feat);

    if (custVal == -1 && featVal == -1) //both entries are invalid
    {
      window.alert("Please enter a valid customer and feature! Valid customers: Widget Co, Synergy Inc, Elevation Executives or Momentum Partners. Valid features: A, B, C, D");
    }
    else if (custVal == -1) //invalid customer entry
    {
      window.alert("Please enter a valid customer! Valid customers: Widget Co, Synergy Inc, Elevation Executives or Momentum Partners.");
    }
    else if (featVal == -1) //invalid feature entry
    {
      window.alert("Please enter a valid feature! Valid features: A, B, C, D");
    }
    else //both entries are valid, now determine which group the customer is in
    {
      if (g1 != -1)
      {
        if (feat == "A" || feat == "B")
        {
          window.alert(cust + " has access to feature " + feat + ".");
        }
        else window.alert(cust + " does not have access to feature " + feat + ".");
      }
      else if (g2 != -1)
      {
        if (feat == "B" || feat == "C")
        {
          window.alert(cust + " has access to feature " + feat + ".");
        }
        else window.alert(cust + " does not have access to feature " + feat + ".");
      }
      else if (g3 != -1)
      {
        if (feat == "C")
        {
          window.alert(cust + " has access to feature " + feat + ".");
        }
        else window.alert(cust + " does not have access to feature " + feat + ".");
      }
      else
      {
        if (feat == "A" || feat == "C" || feat == "D")
        {
          window.alert(cust + " has access to feature " + feat + ".");
        }
        else window.alert(cust + " does not have access to feature " + feat + ".");
      }
    }
}

function hideSwitch() //Will show and hide the showAbout element
{
  if (switcher == 0) //showAbout element is hidden
  {
    switcher = 1;
    document.getElementById("about").style.display = 'block';
  }
  else //showAbout element is visible
  {
    switcher = 0;
    document.getElementById("about").style.display = 'none';
  }
}

function showResults() //Shows results of assignGroup function after groupButton is clicked
{
  document.getElementById("about").style.display = 'block';
}
