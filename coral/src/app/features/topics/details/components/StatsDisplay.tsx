import { Box, ChipStatus, StatusChip, Typography } from "@aivenio/aquarium";

interface StatsDisplayProps {
  amount?: number;
  entity: string;
  chip?: {
    status: ChipStatus;
    text: string;
  };
}

const StatsDisplay = ({ amount, chip, entity }: StatsDisplayProps) => {
  return (
    <Box.Flex flexDirection="column" justifyContent={"space-around"}>
      {amount !== undefined && (
        <Typography.Heading htmlTag={"div"}>{amount}</Typography.Heading>
      )}
      {chip !== undefined && (
        <div>
          <StatusChip text={chip.text} status={chip.status} />
        </div>
      )}

      <Typography.Small color={"grey-50"}>{entity}</Typography.Small>
    </Box.Flex>
  );
};

export default StatsDisplay;
