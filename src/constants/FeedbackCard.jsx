import { useThemeColors } from "../hooks/useThemeColors";

const FeedbackCard = ({ name, avatar, rating, feedback }) => {
  const themeColors = useThemeColors();

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <span
          key={i}
          className="text-lg"
          style={{
            color: themeColors.ratingColor,
          }}
        >
          ★
        </span>
      ) : (
        <span
          key={i}
          className="text-lg"
          style={{
            color: themeColors.text,
          }}
        >
          ☆
        </span>
      )
    );
  };

  return (
    <div
      className="feedbackCard max-w-sm w-full rounded-2xl shadow-lg p-6 space-y-4 "
      style={{
        background: themeColors.cardSecondaryBgColor,
        color: themeColors.text,
      }}
    >
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="text-lg font-semibold ">{name}</h4>
          <div className="flex">{renderStars()}</div>
        </div>
      </div>
      <p className="text-sm leading-relaxed">“{feedback}”</p>
    </div>
  );
};

export default FeedbackCard;
