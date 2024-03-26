#!/bin/bash

# Delete default export from JSON
json_collage=$(sed '/export default/d' ../src/colors/collage.ts | jq -c .)
json_ui=$(sed '/export default/d' ../src/colors/ui.ts | jq -c .)

# Combine JSON
combined_json="{\"collage\": $json_collage, \"ui\": $json_ui}"

echo "{ \"collage\": $json_collage, \"ui\": $json_ui }"

# Update AWS ssm parameter
aws ssm put-parameter --name "/config/COLLAGE_UI_COLORS" --type "String" --value "$combined_json" --overwrite