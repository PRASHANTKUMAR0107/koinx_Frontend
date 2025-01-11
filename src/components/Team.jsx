import React from 'react';

const Team = ({tabs, sectionRefs}) => {
  const members = [
    {
      name: 'John Smith',
      designation: 'Designation here',
      description:
        'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra.',
      image: 'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
    },
    {
      name: 'Elina Williams',
      designation: 'Designation here',
      description:
        'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra.',
      image: 'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_1_1200x1200/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=1-9sfjwH',
    },
    {
      name: 'John Smith',
      designation: 'Designation here',
      description:
        'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra.',
      image: 'https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg',
    },
  ];

  return (
    <div key={tabs.Team} ref={sectionRefs.Team} className="bg-white mx-auto p-6 rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Team</h2>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      <div className="space-y-4">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 border rounded-lg shadow-sm bg-blue-50">
            <div>
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 md:w-40 rounded object-cover"
            />
            <h3 className="text-center text-sm font-semibold">{member.name}</h3>
            <p className="text-xs text-center text-gray-500 mb-2">{member.designation}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
