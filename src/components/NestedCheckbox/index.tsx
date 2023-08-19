import React, { useState } from 'react';
import {Checkbox, List, ListItem, ListItemText, IconButton, Stack, Typography} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface Department {
  id: string;
  label: string;
  children?: Department[];
  selected?: boolean;
  showChildren?: boolean;
}

const departmentData: Department[] = [
  {
    id: '1',
    label: 'customer_service',
    children: [
      { id: '1.1', label: 'support' },
      { id: '1.2', label: 'customer_success' },
    ],
  },
  {
    id: '2',
    label: 'Business Services',
    children: [
      { id: '2.1', label: 'graphic_design' },
      { id: '2.2', label: 'product_design' },
      { id: '2.3', label: 'web_design' },
    ],
  },
];

const NestedCheckbox: React.FC = () => {
  const [selectedData, setSelectedData] = useState<Department[]>(departmentData);

  const handleParentCheckboxChange = (parentId: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newSelectedData = selectedData.map((node) =>
      node.id === parentId
        ? {
            ...node,
            selected: event.target.checked,
            children: node.children?.map((child) => ({
              ...child,
              selected: event.target.checked,
            })),
          }
        : node
    );

    setSelectedData(newSelectedData);
  };

  const handleChildCheckboxChange = (parentId: string, childId: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newSelectedData = selectedData.map((node) =>
      node.id === parentId
        ? {
            ...node,
            children: node.children?.map((child) =>
              child.id === childId
                ? { ...child, selected: event.target.checked }
                : child
            ),
            selected:
              event.target.checked &&
              node.children?.every((child) =>
                child.id === childId ? true : child.selected
              ),
          }
        : node
    );

    setSelectedData(newSelectedData);
  };

  const handleToggleChildVisibility = (parentId: string) => {
    const newSelectedData = selectedData.map((node) =>
      node.id === parentId ? { ...node, showChildren: !node.showChildren } : node
    );

    setSelectedData(newSelectedData);
  };

  return (
    <Stack display='flex' justifyContent='center' alignItems='center'>
      <Typography variant="h4" align="center" gutterBottom marginTop='4rem'>
        Select Department
      </Typography>

      <List>
        {selectedData.map((node) => (
          <React.Fragment key={node.id}>
            <ListItem>
                <Checkbox
                  checked={node.selected || false}
                  indeterminate={
                    node.children?.some((child) => child.selected) &&
                    !node.children?.every((child) => child.selected)
                  }
                  onChange={handleParentCheckboxChange(node.id)}
                />
              <ListItemText primary={node.label} />
              <IconButton onClick={() => handleToggleChildVisibility(node.id)}>
                {node.showChildren ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItem>

            {node.showChildren && node.children?.map((child) => (
              <ListItem key={child.id} style={{ paddingLeft: '50px' }}>
                
                <Checkbox
                    checked={child.selected || false}
                    onChange={handleChildCheckboxChange(node.id, child.id)}
                  />
                <ListItemText primary={child.label} />
              </ListItem>
            ))}
            
          </React.Fragment>
        ))}
      </List>
    </Stack>
  );
};

export default NestedCheckbox;
