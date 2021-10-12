const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
    apiKey: "a81a77b88ce90b1fef0fdcb09da12272-us5",
    server: "us5",
});



/* ---------- to test if setting succeeds or not, if yes: { health_status: "Everything's Chimpy!" } ---------- */
// async function run() {
//    const response = await mailchimp.ping.get();
//    console.log(response);
// }
// run();
/* ---------- to test if setting succeeds or not, if yes: { health_status: "Everything's Chimpy!" } ---------- */



/* ---------- to look for id of a list before creating a new member into a list ---------- */
// const getAllAudiences = async () => {
//   const response = await mailchimp.lists.getAllLists();
//   console.log(response);
// };
  
// getAllAudiences();
/* ---------- to look for id of a list before creating a new member into a list ---------- */



/* ---------- adding a new member to a particular list which is identified by id ---------- */
const addNewMembers = async () => {
  const response = await mailchimp.lists.addListMember("2a5d3120af", {
    email_address: "test22@gmail.com",
    status: "subscribed",

  });
  console.log(response);
};

addNewMembers();
/* ---------- adding a new member to a particular list which is identified by id ---------- */



/* ------------------- not working ------------------- */
/* method 1 of create a list */
// const createNewList1 = async () => {
//     const response = await mailchimp.lists.createList({
//       name: "test",
//       permission_reminder: "hahaha",
//       email_type_option: true,
//       contact: {
//         company: "companyAA",
//         address1: "addressAA",
//         city: "cityAA",
//         country: "countryAA",
//       },
//       campaign_defaults: {
//         from_name: "from_nameAA",
//         from_email: "Beulah_Ryan@hotmail.comAA",
//         subject: "subjectAA",
//         language: "languageAA",
//       },
//     });
//     console.log(response);
//   };
  
//   createNewList1();
/* method 1 of create a list */



/* method 2 of create a list */
// const event = {
//   name: "JS Developers Meetup"
// };

// const footerContactInfo = {
//   company: "Mailchimp",
//   address1: "675 Ponce de Leon Ave NE",
//   address2: "Suite 5000",
//   city: "Atlanta",
//   state: "GA",
//   zip: "30308",
//   country: "US"
// };

// const campaignDefaults = {
//   from_name: "Gettin' Together",
//   from_email: "gettintogether@example.com",
//   subject: "JS Developers Meetup",
//   language: "EN_US"
// };

// async function createNewList2() {
//   const response = await mailchimp.lists.createList({
//     name: event.name,
//     contact: footerContactInfo,
//     permission_reminder: "permission_reminder",
//     email_type_option: true,
//     campaign_defaults: campaignDefaults
//   });
// }

// createNewList2();
/* method1 of create a list */
/* ------------------- not working ------------------- */
