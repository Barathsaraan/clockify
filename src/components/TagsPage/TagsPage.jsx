import React, { useState } from 'react';
import './TagsPage.css';

const TagsPage = () => {
  const [tags, setTags] = useState([

    { name: 'AD', active: true }
  ]);
  const [newTag, setNewTag] = useState('');

  const addTag = () => {
    if (newTag) {
      setTags([...tags, { name: newTag, active: true }]);
      setNewTag('');
    }
  };

  return (
    <div className="tags-container">
      <h2>Tags</h2>
      <div className="tags-header">
        <div className="left-controls">
          <select className="show-active">
            <option>Show active</option>
          </select>
          <input type="text" placeholder="Search by name" className="search-input" />
        </div>
        <div className="right-controls">
          <input 
            type="text" 
            placeholder="Add new tag" 
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            className="new-tag-input"
          />
          <button onClick={addTag} className="add-button">ADD</button>
        </div>
      </div>
      <div className="tags-list">
        <table>
          <thead>
            <tr>
              <th className="checkbox-column"></th>
              <th>NAME</th>
              <th className="actions-column"></th>
            </tr>
          </thead>
          <tbody>
            {tags.map((tag, index) => (
              <tr key={index}>
                <td className="checkbox-column">
                  <input type="checkbox" checked={tag.active} />
                </td>
                <td className="name-column">{tag.name}</td>
                <td className="actions-column">
                  <button className="icon-button edit-button">✎</button>
                  <button className="icon-button delete-button">⋮</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TagsPage;